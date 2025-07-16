import { Node, useEditor } from "@tiptap/react"
import Table from "./Table/Extension"
import Paragraph from "./Paragraph/Extension"
import Text from "@tiptap/extension-text"
import TableRow from "@tiptap/extension-table-row"
import TableHeader from "@tiptap/extension-table-header"
import type { Example } from "@/app/_lib/Example"
import AnswerParts from "./AnswerParts/Extension"
import AnswerRelations from "./AnswerRelations/Extension"
import AnswerOptions from "./AnswerOptions/Extension"
import AnswerOption from "./AnswerOption/Extension"
import ImageExtension from "./Image/Extension"
import MathExtension from "./Math/Extension"
import CustomTableCell from "./TableCell/Extension"
import LeftBox from "./LeftBox/Extension"

const DescDoc = Node.create({
    name: "doc",
    topNode: true,
    content: "leftBox image?"
})

const extensions = [
    DescDoc,
    Table.configure({resizable: true}),
    Text,
    Paragraph,
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

export default function useDescriptionEditor({example} : {example?: Example | null}) {

    return useEditor({
        extensions,
        content: example?.description || '',
        editorProps: {
            attributes: {class: "desc-editor"}
        },
        immediatelyRender: false,
        autofocus: "start"
    })
}
