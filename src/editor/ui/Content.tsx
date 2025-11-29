import { Editor, EditorContent } from "@tiptap/react";
import BoxXPadding from "@/views/common/ui/BoxXPadding";

type Props = Readonly<{
    editor: Editor | null
    onSelect: () => void
}>;

export default function Content( {editor, onSelect}: Props ) {
    return (
        <BoxXPadding className="mt-[24px]" >
            <EditorContent 
                className="border-[1px] p-[16px] border-stroke bg-gray-light rounded-[12px] h-[273px] overflow-y-auto"
                editor={editor}
                onClick={onSelect}
            />
        </BoxXPadding>
    )
}