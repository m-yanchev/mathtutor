import { Editor } from "@tiptap/react";
import EditorBar from "./EditorBar";
import EditorExampleDescContent from "./EditorExampleDescContent";
import { EditorProvider } from "./EditorProvider";

type Props = Readonly<{
    editor: Editor | null
}>

export default function ExampleDescEditor({ editor } : Props) {

    return (
        <EditorProvider editor={editor}>
            <EditorBar />       
            <EditorExampleDescContent />                   
        </EditorProvider>
    )
}