import { type Extensions } from "@tiptap/core";
import Text from "@tiptap/extension-text"
import LeftBox from "./extensions/LeftBox";
import getImageExtensionWithConfig from "./extensions/Image";
import { AnswerRelations } from "./extensions/AnswerRelations";
import AnswerParts from "./extensions/AnswerParts";
import AnswerOptions from "./extensions/AnswerOptions";
import AnswerOption from "./extensions/AnswerOption";
import Formula from "./extensions/Formula"
import TableCell from "./extensions/TableCell"
import Paragraph from "./extensions/Paragraph"
import Bold from "./extensions/Bold"
import Main from "./extensions/Main"
import Doс from "./extensions/Doc"
import Table from "./extensions/Table";
import { TableRow } from '@tiptap/extension-table/row'
import { TableHeader } from '@tiptap/extension-table/header'

export default function getExtensions( id?: number ): Extensions {
    return [
        Doс,
        Table.configure({ resizable: true }),
        TableRow,
        TableHeader,
        Text,
        Paragraph,
        Bold,
        TableCell, 
        Formula,
        getImageExtensionWithConfig({ id }),
        AnswerOption,
        AnswerOptions,
        AnswerParts,
        AnswerRelations,
        LeftBox,
        Main
    ]
}