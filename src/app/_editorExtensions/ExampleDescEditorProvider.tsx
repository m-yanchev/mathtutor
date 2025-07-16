import TableRow from "@tiptap/extension-table-row";
import { EditorProvider, Node } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ReactNode } from "react";
import Table from "./Table/Extension";
import CustomTableCell from "./TableCell/Extension"
import AnswerParts from "./AnswerParts/Extension";
import AnswerRelations from "./AnswerRelations/Extension";
import MathExtension from "./Math/Extension"
import AnswerOptions from "./AnswerOptions/Extension";
import AnswerOption from "./AnswerOption/Extension";
import ImageExtension from "./Image/Extension";
import LeftBox from "./LeftBox/Extension";
import TableHeader from "@tiptap/extension-table-header";
import { Example } from "../_lib/Example";

type Props = Readonly<{
    example: Example | null
    children: ReactNode
}>

const DescDoc = Node.create({
    name: "doc",
    topNode: true,
    content: "leftBox image?"
})

const extensions = [
    DescDoc,
    StarterKit.configure({document: false}), 
    Table.configure({resizable: true}), 
    TableRow, 
    CustomTableCell, 
    TableHeader, 
    MathExtension,
    ImageExtension,
    AnswerOption,
    AnswerOptions,
    AnswerParts,
    AnswerRelations,
    LeftBox
]

export default function ExampleDescEditorProvider({ example, children }: Props) {
    const content = example?.description || ''
    const editorProps = { 
        attributes: { class: "desc-editor overflow-hidden border p-2 m-1 min-h-[200px]" }
    }

    return (
        <EditorProvider 
            extensions={ extensions } 
            content={ content }
            editorProps={ editorProps }
            autofocus
            slotBefore={children}
            immediatelyRender={false}   
        />
    )
}