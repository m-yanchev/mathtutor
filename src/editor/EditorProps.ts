import type { DocumentType, Extensions, FocusPosition } from "@tiptap/core";
import { EditorProps as TiptapEditorProps } from "@tiptap/pm/view";
import type { EditorType } from "@/essences/editor/interfaces";
import getExtensions from "./getExtensions";

export default class EditorProps {

    public readonly extensions: Extensions
    public readonly content: string | DocumentType | undefined
    public readonly editorProps: TiptapEditorProps = {
        attributes: { class: "focus:outline-none w-full flex flex-col gap-[24px] lg:block lg:space-y-[24px]" }
    }
    public readonly immediatelyRender: boolean = false
    public readonly autofocus: FocusPosition = "start"

    constructor( options?: { id?: number, content?: string | DocumentType, type?: EditorType } ) {
        this.extensions = getExtensions( options?.id, { type: options?.type } )
        this.content = options?.content
    }
}