"use server"

import { redirect } from "next/navigation"
import { prisma } from "@/dataSources/prisma"
import User from "@/essences/user/User"

interface TestResultFormFields {
    testId: number
    exampleResults: {testExampleId: number, answer: string}[]
}

export async function saveResults(formData: FormData) {
    const { testId, exampleResults } = getFieldsFromTestResultFormData(formData)
    const { userId } = await User.verifySession()
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

function getFieldsFromTestResultFormData(formData: FormData): TestResultFormFields {
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