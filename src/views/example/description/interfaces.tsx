import { IImageExtensionAttributes } from "@/editor/Image/interfaces"

export interface IParser {
    Component: ( props: ParserComponentProps ) => React.ReactNode
}

export type ParserComponentProps = { key?: number }

export type ControlGroup = "image" | "table" | "math" | "answers" | "paragraph"

export interface CommandButtonGroupProps {
    type: CommandButtonGroupType,
    commands: CommandButtonAttributes[]
}

export interface CommandButtonAttributes {
    title: string,
    commandProps: CommandProps
}

export type CommandButtonGroupType = "add" | "delete" | "align"

export interface IMathDescEditor {
    data: string,
    executeCommand: ( props: CommandProps ) => boolean
    EditorContent: ( props: { className?: string } ) => React.ReactNode
}

export type CommandProps = InsertedTableCommandProps | InsertedMathCommandProps | InsertedImageCommandProps | SimpleCommandProps

type InsertedTableCommandProps = {
    name: CommandName.InsertTable,
    options: InsertedTableOptions
}

type InsertedMathCommandProps = {
    name: CommandName.InsertMath,
    options: InsertedMathOptions
}

type InsertedImageCommandProps = {
    name: CommandName.InsertImage,
    options: InsertedImageOptions
}

export type SimpleCommandProps = {
    name: Exclude<CommandName, CommandName.InsertTable | CommandName.InsertMath | CommandName.InsertImage>
    options?: undefined
}

export type CommandOptions = InsertedTableOptions | InsertedMathOptions | InsertedImageOptions

export enum CommandName {
    InsertTable = "insertTable",
    DeleteTable = "deleteTable",
    AddColumnBefore = "addColumnBefore",
    AddColumnAfter = "addColumnAfter",
    AddRowBefore = "addRowBefore",
    AddRowAfter = "addRowAfter",
    DeleteColumn = "deleteColumn",
    DeleteRow = "deleteRow",
    InsertAnswerOptions = "insertAnswerOptions",
    ChangeAnswerOptionsInlineStatus = "changeAnswerOptionsInlineStatus",
    InsertAnswerRelations = "insertAnswerRelations",
    SetCellAlignLeft = "setCellAlignLeft",
    SetCellAlignCenter = "setCellAlignCenter",
    InsertParagraph = "insertParagraph",
    MarkBold = "markBold",
    InsertMath = "insertMath",
    InsertImage = "insertImage"
}

export type InsertedTableOptions = {
    withHeaderRow: boolean
}

export type InsertedMathOptions = {
    formula: string
}

export type InsertedImageOptions = {
    file: File,
    attrs: IImageExtensionAttributes
}
