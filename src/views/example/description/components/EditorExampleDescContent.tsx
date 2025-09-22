import { EditorContent } from "@tiptap/react";
import { useDescEditorContext } from "./EditorProvider";
import BoxXPadding from "@/views/common/ui/BoxXPadding";

export default function EditorExampleDescContent() {
    const editor = useDescEditorContext()
    
    return (
        <BoxXPadding className="mt-[45px]">
            <EditorContent 
                editor={editor} 
                className="mt-4 border-2 p-2 rounded-md bg-white shadow-xs max-h-96 overflow-y-auto" 
            />
        </BoxXPadding>
    )
}