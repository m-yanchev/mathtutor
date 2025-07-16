import { createContext, useContext, ReactNode } from 'react'
import { Editor } from '@tiptap/react'

const EditorContext = createContext<Editor | null>(null)

export function useEditor() {
    const editor = useContext(EditorContext)
    return editor
}

type Props = Readonly<{
    children: ReactNode
    editor: Editor | null
}>

export function EditorProvider({ children, editor }: Props) {

    return (
        <EditorContext.Provider value={editor}>
            {children}
        </EditorContext.Provider>
    )
} 