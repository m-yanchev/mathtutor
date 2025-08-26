'use server'

import { throwIfNotAdmin } from "@/app/_lib/actions"
import { prisma } from "@/app/_lib/prisma"
import { rm } from "fs/promises"
import path from "path"
import type { Example, ExampleFields } from "./interfaces"
import { redirect } from "next/navigation"
import { getTagIdListString } from "../tags/tags"

export async function getExample(id: number): Promise<Example>{
    const example = await prisma.example.findUnique({
        where: { id }, 
        include: {
            tags: true
        }
    })
    if (!example) {
        throw new Error(`Example with id ${id} not found`)
    }
    return example
}

export async function createExample(formData: FormData): Promise<Example> {

    await throwIfNotAdmin()

    const {description, tagIDList, answer} = getFieldsFromExampleFormData(formData)
    const example = await prisma.example.create({ 
        data: { description, answer, tags: {connect: tagIDList.map(id => ({id}))} } 
    })   
   
    return example
}

export async function updateExample(id: number, formData: FormData): Promise<Example> {

    await throwIfNotAdmin()

    const {description, tagIDList, answer} = getFieldsFromExampleFormData(formData)
    const  tagSet = tagIDList.map( id => {
        if (!id) throw new Error(`wrong id: ${id}`)
        return {id}
    } )
    const example = await prisma.example.update({ 
        where: { id }, data: { description, tags: { set: tagSet }, answer } 
    })
    
    return example
}

function getFieldsFromExampleFormData(formData: FormData): ExampleFields {
    const tags = formData.get('tags')
    const tagIDList = tags !== "" ? String(tags).split(',').map(id=>Number(id)) : []
    tagIDList.forEach( id => {
        if (!id) {
            throw new Error(`wrong id, his value is ${id} in tags: ${tags}`)
        }
    } )

    const answer = formData.get('answer') as string | null
    return {
        description: String(formData.get('description')),
        tagIDList,
        answer: answer && answer.trim() !== "" ? answer : null
    }
}

export async function deleteExample(id: number): Promise<boolean> {

    await throwIfNotAdmin()

    const tests = await prisma.test.findMany( { where: { testExamples: { some: { exampleId: id } }  } } )
    if ( tests.length > 0 ) return false

    await prisma.example.delete({
        where: { id }
    })
    
    const dirPath = path.join(process.cwd(), 'uploads', 'examples', String(id))
    try {
        await rm(dirPath, { recursive: true })
    } catch (error) {
        console.error(`Failed to delete directory ${dirPath}:`, error);
    }
    return true
}

export async function redirectToExamples( formData: FormData ) {
    const {tagIDList} = getFieldsFromExampleFormData(formData)
    redirect( `/examples${ getTagIdListString(tagIDList) }` )
}