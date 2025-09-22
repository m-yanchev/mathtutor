'use client'

import useDescriptionEditor from "@/views/example/description/editorExtensions/useDescriptionEditor"
import ExampleDescEditor from "./ExampleDescEditor"
import type { ExampleData } from "@/essences/example/interfaces"

type Props = Readonly<{
    example?: ExampleData | null
}>

export default function DescriptionInput({ example = null }: Props) {
    const editor = useDescriptionEditor({ example });

    return (
        <>
            <ExampleDescEditor editor={editor} />                   
            <input type="hidden" name="description" value={ editor ? editor.getHTML() : "" } />
        </>
    );
}