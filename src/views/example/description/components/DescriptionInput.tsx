'use client'

import useDescriptionEditor from "@/editor/hooks/useDescriptionEditor"
import type { ExampleData } from "@/essences/example/interfaces"
import ExampleDescEditor from "./ExampleDescEditor"

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