'use server'

import { redirect } from "next/navigation"
import DataSource from "@/essences/test/DataSource"
import type { TestInput } from "@/essences/test/interfaces"

export async function createTest(formData: FormData) {

    const testInput = getTestInputByFormData(formData)
    await DataSource.save(testInput)

    redirect('/tests')
}

export async function updateTest(id: number, formData: FormData) {

    const testInput = getTestInputByFormData(formData)
    await DataSource.updateById(id, testInput)

    redirect('/tests')
}

export async function deleteTest(id: number) {
    await DataSource.deleteById(id)
}

export async function redirectToTests() {
    redirect('/tests')
}

function getTestInputByFormData(formData: FormData): TestInput {

    const exampleIds = formData.getAll("ExampleIds").map( id => Number(id) )
    const costs = formData.getAll("costs").map( cost => Number(cost) || 1 )

    return {
        name: formData.get("name") as string,
        testExamples: exampleIds.map((id, index) => ({
            example: {
                id: Number(id),
            },
            cost: costs[index]
        }))
    }
}