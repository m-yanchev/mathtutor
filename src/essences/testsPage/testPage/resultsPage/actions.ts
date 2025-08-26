"use server"

import { redirect } from "next/navigation"
import { verifySession } from "@/app/_lib/dal"
import type { TestResult, TestResultFields } from "./inerfaces"
import { prisma } from "@/app/_lib/prisma"

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

export async function saveResults(formData: FormData) {
    const { testId, exampleResults } = getFieldsFromTestResultFormData(formData)
    const { userId } = await verifySession()
    console.log(testId, userId)
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
    redirect(`/tests/${testId}/result`)
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