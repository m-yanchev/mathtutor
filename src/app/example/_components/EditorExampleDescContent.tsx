import { EditorContent } from "@tiptap/react";
import { useEditor } from "./EditorProvider";

export default function EditorExampleDescContent() {
    const editor = useEditor()
    
    return (
        <EditorContent 
            editor={editor} 
            className="mt-4 border-2 p-2 rounded-md bg-white shadow-sm max-h-96 overflow-y-auto" 
        />
    )
}