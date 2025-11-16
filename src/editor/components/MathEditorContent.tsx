import { EditorContent } from "@tiptap/react";
import { Editor } from "@tiptap/react";

export default function MathEditorContent( props: { className: string | undefined, editor: Editor | undefined } ) {
    if ( !props.editor ) {
        return null
    }
    return (
        <EditorContent className={props.className} editor={props.editor} />
    )
}