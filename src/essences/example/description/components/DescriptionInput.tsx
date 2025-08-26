'use client'

import useDescriptionEditor from "@/app/_editorExtensions/useDescriptionEditor"
import ExampleDescEditor from "./ExampleDescEditor"
import type { Example } from "../../interfaces"

type Props = Readonly<{
    example?: Example | null
}>

export default function DescriptionInput({ example = null }: Props) {
    const editor = useDescriptionEditor({ example });

    return (
        <div>
            <ExampleDescEditor editor={editor} />                   
            <input type="hidden" name="description" value={ editor ? editor.getHTML() : "" } />
        </div>
    );
}