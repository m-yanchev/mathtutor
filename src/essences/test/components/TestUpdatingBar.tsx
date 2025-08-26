"use client"

import UpdatingBar from "@/app/_components/UpdatingBar"
import { deleteTest } from "../actions"

type Props = Readonly<{    
    id: number
}>

export function TestUpdatingBar( {id}: Props ) {
    return (
        <UpdatingBar model="test" id={id} deletingAction={deleteTest} />
    )
}