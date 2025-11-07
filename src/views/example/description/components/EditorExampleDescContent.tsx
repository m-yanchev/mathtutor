import { EditorContent } from "@tiptap/react";
import { useDescEditorContext } from "./EditorProvider";
import BoxXPadding from "@/views/common/ui/BoxXPadding";

export default function EditorExampleDescContent() {
    const editor = useDescEditorContext()
    
    return (
        <BoxXPadding className="mt-[45px]">
            <EditorContent 
                editor={editor} 
                className="mt-4 border-[1px] p-[16px] border-stroke rounded-md shadow-dark max-h-96 overflow-y-auto" 
            />
        </BoxXPadding>
    )
}