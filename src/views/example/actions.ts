'use server'

import { prisma } from "@/dataSources/prisma"
import { rm } from "fs/promises"
import path from "path"
import ExampleInput from "@/essences/example/ExampleInput"
import type { ExampleData } from "@/essences/example/interfaces"
import User from "@/essences/user/User"
import DataSource from "@/essences/example/DataSource"

export async function createExample(formData: FormData): Promise<ExampleData> {

    const exampleInput = new ExampleInput(formData)
    const example = await DataSource.save(exampleInput)
   
    return example.data
}

export async function updateExample(id: number, formData: FormData): Promise<ExampleData> {
    
    const exampleInput = new ExampleInput(formData);
    const example = await DataSource.updateById(id, exampleInput)

    return example.data
}

export async function deleteExample(id: number): Promise<boolean> {

    await User.throwIfNotAdmin()

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