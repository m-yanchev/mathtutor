"use client"

import ModelFormLayout from "@/views/common/components/ModelFormLayout";
import Test from "@/essences/test/Test";
import type { TestData } from "@/essences/test/interfaces";
import NameInput from "./NameInput";
import ExampleListInput from "./ExampleListInput";

type Props = Readonly<{
    data?: TestData
    mutation: (formData: FormData) => Promise<void>,
}>

export default function UpdatingBlock({ data, mutation }: Props) {

    const test = data ? Test.create(data) : undefined

    const handleSubmit = async (formData: FormData) => {
        await mutation(formData)
    }

    return (
        <ModelFormLayout onSubmit={handleSubmit} cancelHref="/tests" >
            <NameInput value={ test?.name || "" } />
            <ExampleListInput testExamples={ test?.relationTestExamples || [] } />
        </ModelFormLayout>
    )
}