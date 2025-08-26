import { Node, useEditor } from "@tiptap/react"
import Table from "./Table/Extension"
import Paragraph from "./Paragraph/Extension"
import Bold from "./Bold/Extension"
import Text from "@tiptap/extension-text"
import TableRow from "@tiptap/extension-table-row"
import TableHeader from "@tiptap/extension-table-header"
import getImageExtensionWithConfig from "@/essences/example/description/images/editorExtension/Extension"
import AnswerParts from "./AnswerParts/Extension"
import AnswerRelations from "./AnswerRelations/Extension"
import AnswerOptions from "./AnswerOptions/Extension"
import AnswerOption from "./AnswerOption/Extension"
import MathExtension from "./Math/Extension"
import CustomTableCell from "./TableCell/Extension"
import LeftBox from "./LeftBox/Extension"
import type { Example } from "@/essences/example/interfaces"

const DescDoc = Node.create({
    name: "doc",
    topNode: true,
    content: "leftBox image?"
})

export default function useDescriptionEditor({example} : {example?: Example | null}) {

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
