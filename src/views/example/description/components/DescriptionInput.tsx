'use client'

import useDescriptionEditor from "@/editor/hooks/useDescriptionEditor"
import type { ExampleData } from "@/essences/example/interfaces"
import ExampleDescEditor from "./ExampleDescEditor"

type Props = Readonly<{
    example?: ExampleData | null
}>

export default function DescriptionInput({ example = undefined }: Props) {

    const { editor, jsonContent } = useDescriptionEditor({ example });

    return (
        <>
            <ExampleDescEditor editor={editor} />                   
            <input type="hidden" name="description" value={ jsonContent } />
        </>
    );
}