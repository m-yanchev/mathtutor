import { createContext, useContext } from "react";
import { Editor } from '@tiptap/react'

const EditorContext = createContext<Editor | null>(null)

export default function useEditorContext() {
    return useContext(EditorContext)
}