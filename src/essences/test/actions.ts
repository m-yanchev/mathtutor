'use server'

import { throwIfNotAdmin } from "@/app/_lib/actions"
import { prisma } from "@/app/_lib/prisma"
import { redirect } from "next/navigation"
import type { SingleTest, TestFields } from "./interfaces"
import { Prisma } from "@prisma/client"

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

export async function createTest(formData: FormData) {

    await throwIfNotAdmin()

    const { name, exampleIDList } = getFieldsFromTestFormData(formData)
    await prisma.test.create({
        data: { name, testExamples: { create: exampleIDList.map((id, index) => ({ exampleId: id, number: index })) } }
    })
    redirect('/tests')
}

export async function updateTest(id: number, formData: FormData) {

    await throwIfNotAdmin()

    const {name, exampleIDList} = getFieldsFromTestFormData(formData)
    const testExamples = await prisma.testExample.findMany({
        where: { OR: exampleIDList.map(id => ({exampleId: id}))},
        select: { id: true }
    })
    const deleteExampleResults = prisma.exampleResult.deleteMany({
        where: { OR: testExamples.map(({id}) => ({ testExampleId: id}))}
    })
    const updateTest = prisma.test.update({ 
        where: { id }, 
        data: { 
            name, 
            testExamples: {
                deleteMany: {},
                create: exampleIDList.map((id, index) => ({ exampleId: id, number: index }))
            } 
        } 
    })
    await prisma.$transaction(
        [deleteExampleResults, updateTest], 
        {isolationLevel: Prisma.TransactionIsolationLevel.Serializable,})
    redirect('/tests')
}

function getFieldsFromTestFormData(formData: FormData): TestFields {
    const exampleIDList = String(formData.get('examples')).split(',').map(id => Number(id))
    return {
        name: String(formData.get('name')),
        exampleIDList
    }
}

export async function deleteTest(id: number) {

    await throwIfNotAdmin()

    const deleteTestExamples = prisma.testExample.deleteMany({
        where: { testId: id }
    })
    const deleteTest = prisma.test.delete({
        where: { id }
    })
    await prisma.$transaction([deleteTestExamples, deleteTest])
}

export async function redirectToTests() {
    redirect('/tests')
}