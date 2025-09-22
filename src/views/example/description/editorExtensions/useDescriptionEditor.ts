import { Node, useEditor } from "@tiptap/react"
import Text from "@tiptap/extension-text"
import TableRow from "@tiptap/extension-table-row"
import TableHeader from "@tiptap/extension-table-header"
import { ExampleData } from "@/essences/example/interfaces"
import MathExtension from "../math/editorExtension/Extension"
import getImageExtensionWithConfig from "../images/editorExtension/Extension"
import Table from "./Table/Extension"
import Paragraph from "./Paragraph/Extension"
import Bold from "./Bold/Extension"
import AnswerParts from "./AnswerParts/Extension"
import AnswerRelations from "./AnswerRelations/Extension"
import AnswerOptions from "./AnswerOptions/Extension"
import AnswerOption from "./AnswerOption/Extension"
import CustomTableCell from "./TableCell/Extension"
import LeftBox from "./LeftBox/Extension"

const DescDoc = Node.create({
    name: "doc",
    topNode: true,
    content: "leftBox image?"
})

export default function useDescriptionEditor( {example} : { example?: ExampleData | null } ) {

    return useEditor({
        extensions: [
            DescDoc,
            Table.configure({resizable: true}),
            Text,
            Paragraph,
            Bold,
            TableRow, 
            CustomTableCell, 
            TableHeader, 
            MathExtension,
            getImageExtensionWithConfig({ id: example?.id }),
            AnswerOption,
            AnswerOptions,
            AnswerParts,
            AnswerRelations,
            LeftBox
        ],
        content: example?.description || '',
        editorProps: {
            attributes: {class: "desc-editor"}
        },
        immediatelyRender: false,
        autofocus: "start"
    })
}
