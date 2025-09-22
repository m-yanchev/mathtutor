'use server'

import { redirect } from "next/navigation"
import TestInput from "@/essences/test/TestInput"
import DataSource from "@/essences/test/DataSource"

export async function createTest(formData: FormData) {

    console.log("createTest action called")
    const testInput = TestInput.create(formData)
    console.log(testInput)
    await DataSource.save(testInput)

    redirect('/tests')
}

export async function updateTest(id: number, formData: FormData) {

    const testInput = TestInput.create(formData)
    await DataSource.updateById(id, testInput)

    redirect('/tests')
}

export async function deleteTest(id: number) {
    await DataSource.deleteById(id)
}

export async function redirectToTests() {
    redirect('/tests')
}