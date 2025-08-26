"use client"

import { deleteExample } from "../actions"
import DeletingButton from "@/essences/topLevelLayout/components/DeletingActionButton"

type Props = Readonly<{
    id: number
}>

export function ExampleDeletingButton( {id}: Props ) {

    const handleDeleting = async () => {
        const success = await deleteExample(id)
        if (!success) alert( "Не можно видалити завдання, тому що воно використовувається в тестах." )
    }

    return (
        <DeletingButton action={handleDeleting} />
    )
}