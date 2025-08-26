'use client'

import type { CommandName } from "../../../essences/example/description/components/EditorCommandBars"
import { useDescEditorContext } from "../../../essences/example/description/components/EditorProvider"

type Props = Readonly<CommandButtonAttributes>

export interface CommandButtonAttributes {
    title: string,
    commandName: CommandName,
    commandOptions?: InsertedTableOptions
}

type InsertedTableOptions = {withHeaderRow: boolean}

export default function CommandButton({title, commandName, commandOptions} : Props) {
    
    const editor = useDescEditorContext()
    
    const handleClick = () => {
        editor?.commands[commandName](commandOptions)
    }

    return (
        <button className="p-1 m-1 border rounded-md" type="button" onClick={handleClick}>
            {title}
        </button>
    )
}