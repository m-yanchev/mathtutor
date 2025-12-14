import { Editor, useEditor as useTiptapEditor, useEditorState as useTiptapEditorState } from "@tiptap/react"
import { ExampleData } from "@/essences/example/interfaces"
import EditorProps from "@/editor/EditorProps"

type EditorState = {
    editor: Editor | undefined
    content: string | ""
 }

type ReturnType = {
    condition: EditorState
    solution: EditorState
}

export default function useEditor( {example} : { example?: ExampleData | null } ): ReturnType {

    const useEditorState = ( editor : Editor | null ) : EditorState => {
        const editorState = useTiptapEditorState({
            editor: editor, 
            selector: ({editor}) => {
                console.log("Selecting editor state", editor);
                if (!editor) return { content: null };
                return {
                    content: editor.getJSON(),
                }
            }
        })
        return {
            editor: editor || undefined,
            content: editorState?.content ? JSON.stringify(editorState.content) : "",
        }
    }

    const conditionContent = example?.description ? JSON.parse( example.description ) : undefined
    const conditionEditorProps = new EditorProps( { id: example?.id, content: conditionContent, type: "condition" } )
    const conditionEditor = useTiptapEditor(conditionEditorProps)

    const solutionContent = example?.solution ? JSON.parse( example.solution ) : undefined
    const solutionEditorProps = new EditorProps( { id: example?.id, content: solutionContent, type: "solution" } )
    const solutionEditor = useTiptapEditor(solutionEditorProps)
    return { 
        condition: useEditorState( conditionEditor ), 
        solution: useEditorState( solutionEditor )
    }
}