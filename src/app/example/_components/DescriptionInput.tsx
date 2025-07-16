'use client'

import type { Example } from "@/app/_lib/Example"
import useDescriptionEditor from "@/app/_editorExtensions/useDescriptionEditor"
import ExampleDescEditor from "./ExampleDescEditor"
import useSetImageSrcEffect from "@/app/_editorExtensions/useSetImageSrcEffect"

type Props = Readonly<{
    example?: Example | null
}>

export default function DescriptionInput({ example = null }: Props) {
    const editor = useDescriptionEditor({ example });
    useSetImageSrcEffect({
        id: example?.id,
        editor: editor
    });

    return (
        <div>
            <ExampleDescEditor editor={editor} />                   
            <input type="hidden" name="description" value={editor ? editor.getHTML() : ""} />
        </div>
    );
}