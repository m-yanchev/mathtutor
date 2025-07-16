'use server'

import { prisma } from '@/app/_lib/prisma';
import { redirect } from "next/navigation"
import { writeFile, mkdir, rm } from 'fs/promises'
import path from 'path'
import type { Example } from "./Example"
import type { SingleTest, TestForList } from "./Test"
import { checkAdminAccess, verifySession } from './dal';
import { TestResult } from './TestResult';

type ExampleFields = {
    description: string,
    tagIDList: number[],
    imageFile: File | null,
    answer: string | null
}

type TestFields = {
    name: string,
    exampleIDList: number[]
}

type TestResultFields = {
    testId: number
    exampleResults: {testExampleId: number, answer: string}[]
}

export async function createExample(formData: FormData) {

    throwIfNotAdmin()

    const {description, tagIDList, imageFile, answer} = getFieldsFromExampleFormData(formData)
    const example = await prisma.example.create({ 
        data: { description, answer, tags: {connect: tagIDList.map(id => ({id}))} } 
    })   
    writeDescriptionImage(example.id, imageFile)    
    redirect('/examples')   
}

export async function updateExample(id: number, formData: FormData) {

    throwIfNotAdmin()

    const {description, imageFile, tagIDList, answer} = getFieldsFromExampleFormData(formData)    
    await prisma.example.update({ where: { id }, data: { description, tags: {set: tagIDList.map(id => ({id}))}, answer } })
    writeDescriptionImage(id, imageFile)    
    redirect('/examples')
}
 
export async function redirectToExamples() {
    redirect('/examples')
}

function getFieldsFromExampleFormData(formData: FormData): ExampleFields {
    const tags = formData.get('tags')
    const imageFile = formData.get('image') as File | null
    const tagIDList = tags !== "" ? String(formData.get('tags')).split(',').map(id=>Number(id)) : []
    const answer = formData.get('answer') as string | null
    return {
        description: String(formData.get('description')),
        tagIDList,
        imageFile: (imageFile && imageFile.size > 0) ? imageFile : null,
        answer: answer && answer.trim() !== "" ? answer : null
    }
}

async function writeDescriptionImage(id: number, imageFile: File | null) {
    if (imageFile) {
        const dirPath = path.join(process.cwd(), 'public', 'examples', String(id))
        await mkdir(dirPath, { recursive: true })
        
        const filePath = path.join(dirPath, "image.png")        
        const buffer = Buffer.from(await imageFile.arrayBuffer())
        await writeFile(filePath, buffer)
    }
}

export async function deleteExample(id: number) {

    throwIfNotAdmin()

    await prisma.example.delete({
        where: { id }
    })
    
    const dirPath = path.join(process.cwd(), 'public', 'examples', String(id))
    try {
        await rm(dirPath, { recursive: true })
    } catch (error) {
        console.error(`Failed to delete directory ${dirPath}:`, error);
    }
}

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

export async function getExamples(): Promise<Example[]> {
    return prisma.example.findMany({ include: { tags: true } })
}

export async function createTest(formData: FormData) {

    throwIfNotAdmin()

    const { name, exampleIDList } = getFieldsFromTestFormData(formData)
    await prisma.test.create({
        data: { name, testExamples: { create: exampleIDList.map((id, index) => ({ exampleId: id, number: index })) } }
    })
    redirect('/tests')
}

export async function updateTest(id: number, formData: FormData) {

    throwIfNotAdmin()

    const {name, exampleIDList} = getFieldsFromTestFormData(formData)    
    await prisma.test.update({ 
        where: { id }, 
        data: { 
            name, 
            testExamples: {
                deleteMany: {},
                create: exampleIDList.map((id, index) => ({ exampleId: id, number: index }))
            } 
        } 
    })
    redirect('/tests')
}


export async function redirectToTests() {
    redirect('/tests')
}

function getFieldsFromTestFormData(formData: FormData): TestFields {
    const exampleIDList = String(formData.get('examples')).split(',').map(id => Number(id))
    return {
        name: String(formData.get('name')),
        exampleIDList
    }
}

export async function getTests(): Promise<TestForList[]> {
    return prisma.test.findMany()
}

export async function deleteTest(id: number) {

    throwIfNotAdmin()

    const deleteTestExamples = prisma.testExample.deleteMany({
        where: { testId: id }
    })
    const deleteTest = prisma.test.delete({
        where: { id }
    })
    await prisma.$transaction([deleteTestExamples, deleteTest])
}

export async function getTest(id: number): Promise<SingleTest>{
    const test = await prisma.test.findUnique({
        where: { id }, 
        include: {
            testExamples: {
                select: {
                    id: true,
                    example: {
                        include: {
                            tags: true
                        }
                    },
                    number: true
                }
            }
        }
    })
    if (!test) {
        throw new Error(`Test with id ${id} not found`)
    }
    return test
}

export async function saveResults(formData: FormData) {
    const { testId, exampleResults } = getFieldsFromTestResultFormData(formData)
    const { userId } = await verifySession()
    console.log(`Saving results for user ${userId} for test ${testId} with results:`, exampleResults)
    await prisma.testResult.create({
        data: {
            testId,
            userId,
            exampleResults: {
                create: exampleResults.map(result => ({
                    testExampleId: result.testExampleId,
                    answer: result.answer
                }))
            }
        }
    })
    redirect(`/test/${testId}/result`)
}

export async function getTestResult(id: number): Promise<TestResult> {
    const { userId } = await verifySession()
    const result = await prisma.testResult.findFirst({
        where: { testId: id, userId }, 
        orderBy: { date: 'desc' },
        select: {
            test: {
                select: {
                    name: true
                },
            },
            exampleResults: {
                select: {     
                    id: true,               
                    testExample: {
                        select: {
                            example: {
                                select: {
                                    id: true,
                                    description: true,
                                    answer: true
                                },
                            },
                            number: true
                        }
                    },
                    answer: true
                }
            }
        }
    })
    if (!result) {
        throw new Error(`Result for test with id ${id} not found`)
    }
    return result
}

function getFieldsFromTestResultFormData(formData: FormData): TestResultFields {
    const testId = Number(formData.get('testId'))
    const testExampleIdList = formData.getAll('testExampleIdList')
    const answers = formData.getAll('answers')
    return {
        testId,
        exampleResults: testExampleIdList.map((testExampleId, index) => ({
            testExampleId: Number(testExampleId),
            answer: String(answers[index])
        }))
    }
}

function throwIfNotAdmin() {
    if (!(checkAdminAccess())) {
        throw new Error("User don't have access")
    }
}