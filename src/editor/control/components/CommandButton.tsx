import type { CommandProps } from "@/essences/editor/interfaces";
import { useContext } from "@/editor/components/Provider";

type Props = Readonly<{
    children?: React.ReactNode,
    commandProps: CommandProps
}>;

export default function CommandButton( { children, commandProps } : Props ) {

    const editor = useContext()
    
    const handleClick = () => {
        (editor?.commands[commandProps.name] as any)(commandProps.options)
    }

    return (
        <button className="flex items-center gap-[8px] cursor-pointer" type="button" onClick={handleClick}>
            {children}
        </button>
    )
}