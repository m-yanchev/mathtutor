import { type Extensions, type FocusPosition, Node } from "@tiptap/core";
import LeftBox from "./LeftBox/Extension";
import getImageExtensionWithConfig from "./Image/Extension";
import { AnswerRelations } from "./AnswerRelations/Extension";
import AnswerParts from "./AnswerParts/Extension";
import AnswerOptions from "./AnswerOptions/Extension";
import AnswerOption from "./AnswerOption/Extension";
import MathExtension from "./Math/Extension"
import TableHeader from "@tiptap/extension-table-header"
import CustomTableCell from "./TableCell/Extension"
import TableRow from "@tiptap/extension-table-row"
import Table from "./Table/Extension"
import Text from "@tiptap/extension-text"
import Paragraph from "./Paragraph/Extension"
import Bold from "./Bold/Extension"
import Main from "./Main/Extension"
import DescDoс from "./Doc/Extension"
import { EditorProps as TiptapEditorProps } from "@tiptap/pm/view";

export default class EditorProps {

    public readonly extensions: Extensions
    public readonly content: string
    public readonly editorProps: TiptapEditorProps = {
        attributes: { class: "focus:outline-none desc-editor" }
    }
    public readonly immediatelyRender: boolean = false
    public readonly autofocus: FocusPosition = "start"

    constructor( options?: { id?: number, content?: string } ) {

        this.extensions = [
            DescDoс,
            Table.configure({resizable: true}),
            Text,
            Paragraph,
            Bold,
            TableRow, 
            CustomTableCell, 
            TableHeader, 
            MathExtension,
            getImageExtensionWithConfig({ id: options?.id }),
            AnswerOption,
            AnswerOptions,
            AnswerParts,
            AnswerRelations,
            LeftBox,
            Main
        ]

        this.content = options?.content || ''
    }
}