"use client"

import { redirect } from "next/navigation"
import ExampleInput from "@/editor/components/ExampleInput"
import TagSetInput from "@/views/tag/components/TagSetInput"
import useTags from "@/views/tag/hooks/useTags"
import type { ExampleData } from "@/essences/example/interfaces"
import ExampleAnswerInput from "@/views/answer/components/DataInput"
import ModelFormLayout from "@/views/common/components/ModelFormLayout"
import useImage from "@/views/editor/image/hooks/useImage"
import ImageProvider from "@/views/editor/image/components/ImageFileProvider"

type Props = Readonly<{
    example?: ExampleData
    exampleMutation: (formData: FormData) => Promise<ExampleData>,
}>

export default function UpdatingPage( { example, exampleMutation }: Props ) {

    console.log("UpdatingPage render");

    const { imageProviderValue, uploadImages } = useImage()
    const { handleTagSetChange, tagIdListString } = useTags(example?.tags)

    const redirectingPath = `/examples/${tagIdListString}`

    const handleSubmit = async (formData: FormData) => {
        const {id} = await exampleMutation(formData)
        await uploadImages({ parent: { id, name: "examples" } })
        redirect(redirectingPath)
    }

    return (
        <ImageProvider value={imageProviderValue}>
            <ModelFormLayout onSubmit={handleSubmit} >
                <ExampleInput example={example} />
                <ExampleAnswerInput data={ example?.answer || "" } />
                <TagSetInput tags={ example?.tags } onChange={handleTagSetChange}/>
            </ModelFormLayout>
        </ImageProvider>
    )
}