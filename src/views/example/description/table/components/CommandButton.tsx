import type { CommandProps } from "@/views/example/description/interfaces";
import { useDescEditorContext } from "@/editor/components/Provider";

type Props = Readonly<{
    children?: React.ReactNode,
    commandProps: CommandProps
}>;

export default function CommandButton( { children, commandProps } : Props ) {

    const editor = useDescEditorContext()
    
    const handleClick = () => {
        editor?.executeCommand(commandProps)
    }

    return (
        <button className="flex items-center gap-[8px] cursor-pointer" type="button" onClick={handleClick}>
            {children}
        </button>
    )
}