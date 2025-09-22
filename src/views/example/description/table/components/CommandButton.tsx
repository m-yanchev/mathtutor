import type { CommandName, InsertedTableOptions } from "../../interfaces";
import { useDescEditorContext } from "../../components/EditorProvider";

type Props = Readonly<{
    children?: React.ReactNode,
    commandName: CommandName,
    commandOptions?: InsertedTableOptions
}>;

export default function CommandButton( { children, commandName, commandOptions } : Props ) {

    const editor = useDescEditorContext()
    
    const handleClick = () => {
        editor?.commands[commandName](commandOptions)
    }

    return (
        <button className="flex items-center gap-[8px] cursor-pointer" type="button" onClick={handleClick}>
            {children}
        </button>
    )
}