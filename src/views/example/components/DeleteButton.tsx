"use client"

import { deleteExample } from "../actions"
import DeletingButton from "@/views/common/components/DeletingActionButton"

type Props = Readonly<{
    id: number
}>

export default function DeleteButton( {id}: Props ) {

    const handleDeleting = async () => {
        const success = await deleteExample(id)
        if (!success) alert( "Не можно видалити завдання, тому що воно використовувається в тестах." )
    }

    return (
        <DeletingButton action={handleDeleting} />
    )
}