import { EditorContent } from "@tiptap/react";
import { useDescEditorContext } from "@/essences/example/description/components/EditorProvider";

export default function EditorExampleDescContent() {
    const editor = useDescEditorContext()
    
    return (
        <EditorContent 
            editor={editor} 
            className="mt-4 border-2 p-2 rounded-md bg-white shadow-xs max-h-96 overflow-y-auto" 
        />
    )
}