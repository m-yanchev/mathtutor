'use client'

import { useRouter } from "next/navigation"
import Button from "./Button"
import DeletingIcon from "../icons/Deleting"

type Props = Readonly<{
    action: () => Promise<void>
}>

export default function DeletingActionButton( {action}: Props ) {
        
    const router = useRouter()

    const handleClick = async () => {
        if ( !confirm('Ви впевнені, що хочете видалити це?') ) return
        await action()
        router.refresh()
    }

    return (
        <Button onClick={ () => { handleClick() }} variant="small" >
            <DeletingIcon />
        </Button>
    );
}

