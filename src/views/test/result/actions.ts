"use server"

import { redirect } from "next/navigation"
import type { TestResultInput } from "@/essences/test/result/interfaces"
import DataSource from "@/essences/test/result/DataSource"

export async function saveResults(formData: FormData) {
    const inputed = getFieldsFromTestResultFormData( formData )
    await DataSource.save(inputed)
    redirect(`/tests/${inputed.testId}/result`)
}

function getFieldsFromTestResultFormData( formData: FormData ): TestResultInput {
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