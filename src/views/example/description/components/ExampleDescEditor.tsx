import EditorBar from "./EditorBar";
import EditorExampleDescContent from "./EditorExampleDescContent";
import { EditorProvider } from "../../../../editor/components/Provider";

type Props = Readonly<{
    editor: Editor | null
}>

export default function ExampleDescEditor( { editor } : Props ) {

    return (
        <EditorProvider editor={editor}>
            <EditorBar />       
            <EditorExampleDescContent />                   
        </EditorProvider>
    )
}