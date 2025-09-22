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
    commandName: CommandName,
    commandOptions?: InsertedTableOptions
}

export type CommandName = "insertTable" | "deleteTable" | "addColumnBefore" | "addColumnAfter" | "addRowBefore" | "addRowBefore" | 
                    "addRowAfter" | "deleteColumn" | "deleteRow" | "insertAnswerOptions" | "changeAnswerOptionsInlineStatus" |
                    "insertAnswerRelations" | "setCellAlignLeft" | "setCellAlignCenter" | "insertParagraph" | "markBold"

export type InsertedTableOptions = {
    withHeaderRow: boolean
}

export type CommandButtonGroupType = "add" | "delete" | "align"

