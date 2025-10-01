"use client"

import NameInput from "@/views/test/components/NameInput";
import ModelFormLayout from "@/views/common/components/ModelFormLayout";
import ExampleListInput from "./ExampleListInput";
import Test from "@/essences/test/Test";
import type { TestData } from "@/essences/test/interfaces";

type Props = Readonly<{
    data?: TestData
    mutation: (formData: FormData) => Promise<void>,
}>

export default function UpdatingPage({ data, mutation }: Props) {

    const test = data ? Test.create(data) : undefined

    const handleSubmit = async (formData: FormData) => {
        await mutation(formData)
    }

    return (
        <ModelFormLayout onSubmit={handleSubmit} >
            <NameInput value={test?.name || ""} />
            <ExampleListInput testExamples={test?.relationTestExamples || []} />
        </ModelFormLayout>
    )
}