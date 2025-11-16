import { Editor, useEditor } from "@tiptap/react"
import { ExampleData } from "@/essences/example/interfaces"
import EditorProps from "@/editor/EditorProps"

type ReturnType = {
    editor: Editor | null,
    jsonContent: string
}

export default function useExampleEditor( {example} : { example?: ExampleData | null } ): ReturnType {
    const content = example?.description ? JSON.parse( example.description ) : undefined
    const editorProps = new EditorProps( { id: example?.id, content } )
    const editor = useEditor(editorProps)
    return { editor, jsonContent: JSON.stringify(editor?.getJSON() || "") }
}