import { type Extensions } from "@tiptap/core";
import { Placeholder } from "@tiptap/extensions"
import Text from "@tiptap/extension-text"
import { TableRow } from '@tiptap/extension-table/row'
import { TableHeader } from '@tiptap/extension-table/header'
import type { EditorType } from "@/essences/editor/interfaces";
import LeftBox from "./extensions/LeftBox";
import getImageExtensionWithConfig from "./extensions/Image";
import AnswerRelations from "./extensions/AnswerRelations";
import AnswerParts from "./extensions/AnswerParts";
import AnswerOptions from "./extensions/AnswerOptions";
import AnswerOption from "./extensions/AnswerOption";
import Formula from "./extensions/Formula"
import TableCell from "./extensions/TableCell"
import Paragraph from "./extensions/Paragraph"
import Bold from "./extensions/Bold"
import Main from "./extensions/Main"
import ConditionDoc from "./extensions/ConditionDoc"
import Table from "./extensions/Table";
import SolutionDoc from "./extensions/SolutionDoc";
import ImagePreview from "./extensions/ImagePreview";

export default function getExtensions( id?: number, options?: { type?: EditorType } ): Extensions {
    return options?.type === "solution" ? [
        Placeholder.configure({ placeholder: "Рішення" }),
        SolutionDoc,
        Main,
        getImageExtensionWithConfig({ id }),
        ImagePreview,
        Paragraph,
        Bold,
        Text,
        Table.configure({ resizable: true }),
        TableHeader,
        TableRow,
        TableCell, 
        Formula,
    ] : [
        Placeholder.configure({ placeholder: "Завдання" }),
        ConditionDoc,
        Main,
        LeftBox,
        getImageExtensionWithConfig({ id }),
        ImagePreview,
        Paragraph,
        Bold,
        Text,
        Table.configure({ resizable: true }),
        TableHeader,
        TableRow,
        TableCell, 
        Formula,
        AnswerOptions,
        AnswerRelations,
        AnswerParts,
        AnswerOption,
    ]
}