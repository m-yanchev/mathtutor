import { useEditor } from "@tiptap/react"
import { ExampleData } from "@/essences/example/interfaces"
import EditorProps from "@/editor/EditorProps"

export default function useDescriptionEditor( {example} : { example?: ExampleData | null } ) {
    const editorProps = new EditorProps( { id: example?.id, content: example?.description } )
    return useEditor(editorProps)
}
