import MathDescEditor from "@/editor/MathDescEditor";
//import { useDescEditorContext } from "./EditorProvider";
import BoxXPadding from "@/views/common/ui/BoxXPadding";

export default function EditorExampleDescContent( props: { editor: MathDescEditor } ) {

    /*const editor = useDescEditorContext()
        if ( editor === undefined ) {
        return null;
    }*/

    const EditorContent = props.editor.EditorContent
    
    return (
        <BoxXPadding className="mt-[45px]">
            <EditorContent 
                className="mt-4 border-[1px] p-[16px] border-stroke rounded-md shadow-dark max-h-96 overflow-y-auto" 
            />
        </BoxXPadding>
    )
}