"use client"

import ImageProvider from "@/essences/example/description/images/components/ImageFileProvider"
import ModelFormLayout from "./ModelFormLayout"
import DescriptionInput from "../../../essences/example/description/components/DescriptionInput"
import ExampleAnswerInput from "./ExampleAnswerInput"
import TagSetInput from "@/essences/tags/components/TagSetInput"
import useImage from "@/essences/example/description/images/hooks/useImage"
import { redirect } from "next/navigation"
import useTags from "@/essences/tags/hooks/useTags"
import { Example } from "@/essences/example/interfaces"

type Props = Readonly<{
    example?: Example
    exampleMutation: (formData: FormData) => Promise<Example>,
    title: string
}>

export default function ExampleUpdatingPage( { example, exampleMutation, title }: Props ) {

    const { imageProviderValue, uploadImages } = useImage()
    const { handleTagSetChange, tagIdListString } = useTags(example?.tags)

    const redirectingPath = `/examples/${tagIdListString}`

    const handleSubmit = async (formData: FormData) => {
        const {id} = await exampleMutation(formData)
        await uploadImages({ parent: { id, name: "examples" } })
        redirect(redirectingPath)
    }

    const handleCancel = () => {
        redirect(redirectingPath)    
    }

    return (
        <ImageProvider value={imageProviderValue}>
            <ModelFormLayout title={title} onSubmit={handleSubmit} onCancel={handleCancel}>
                <DescriptionInput example={example} />
                <ExampleAnswerInput value={example?.answer || ""} />
                <TagSetInput tags={example?.tags} onChange={handleTagSetChange}/>
            </ModelFormLayout>
        </ImageProvider>
    )
}