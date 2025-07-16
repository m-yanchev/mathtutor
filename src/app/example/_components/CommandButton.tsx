'use client'

import { useEditor } from "./EditorProvider"

type Props = Readonly<CommandButtonAttributes>

export interface CommandButtonAttributes {
    title: string,
    commandName: CommandName,
    commandOptions?: InsertedTableOptions
}
type CommandName = "insertTable" | "deleteTable" | "addColumnBefore" | "addColumnAfter" | "addRowBefore" | "addRowBefore" | 
                    "addRowAfter" | "deleteColumn" | "deleteRow" | "insertAnswerOptions" | "changeAnswerOptionsInlineStatus" |
                    "insertAnswerRelations" | "setCellAlignLeft" | "setCellAlignCenter" | "insertParagraph"
type InsertedTableOptions = {withHeaderRow: boolean}

export default function CommandButton({title, commandName, commandOptions} : Props) {
    
    const editor = useEditor()
    
    const handleClick = () => {
        editor?.commands[commandName](commandOptions)
    }

    return (
        <button className="p-1 m-1 border rounded-md" type="button" onClick={handleClick}>
            {title}
        </button>
    )
}