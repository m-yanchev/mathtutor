import { createContext, useContext as useReactContext, ReactNode } from 'react'
import { Editor } from '@tiptap/react'

const EditorContext = createContext<Editor | null>(null)

export function useContext() {
    const editor = useReactContext(EditorContext)
    return editor
}

type Props = Readonly<{
    children: ReactNode
    editor: Editor | null
}>

export function Provider( { children, editor }: Props ) {

    return (
        <EditorContext.Provider value={editor}>
            {children}
        </EditorContext.Provider>
    )
} 