import { Editor, useEditor } from "@tiptap/react"
import { ExampleData } from "@/essences/example/interfaces"
import EditorProps from "@/editor/EditorProps"

type ReturnType = {
    editor: Editor | null,
    jsonContent: string
}

export default function useDescriptionEditor( {example} : { example?: ExampleData | null } ): ReturnType {
    const editorProps = new EditorProps( { id: example?.id, content: example?.description } )
    const editor = useEditor(editorProps)
    return { editor, jsonContent: JSON.stringify(editor?.getJSON() || "") }
}
