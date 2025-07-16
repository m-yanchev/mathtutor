import { useEffect } from "react";
import { Editor } from "@tiptap/react";
import { getSourceImage } from "@/app/_lib/Example";

type Props = Readonly<{
    id: number | undefined
    editor: Editor | null
}>

export default function useSetImageSrcEffect({ id, editor }: Props) {
    useEffect(() => {
            if (id !== undefined && editor) {            
                editor.commands.setSource({ src: getSourceImage({ id })});
            }        
        }, [editor, id]
    );
}