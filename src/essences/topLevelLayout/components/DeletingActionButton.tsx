'use client'

import { useRouter } from "next/navigation"
import DeletingButton from "../ui/DeletingButton"

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
        <DeletingButton onClick={ () => { handleClick() }}  />
    );
}

