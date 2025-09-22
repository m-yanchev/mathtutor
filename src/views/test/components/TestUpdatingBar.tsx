"use client"

import DeletingActionButton from "@/views/common/components/DeletingActionButton"
import EssenceEditingLink from "@/views/common/components/EssenceEditingLink"
import { deleteTest } from "../actions"

type Props = Readonly<{    
    id: number
}>

export function TestUpdatingBar( {id}: Props ) {
   return (
        <div className="w-full flex justify-between gap-2">
            <EssenceEditingLink essence="test" id={id} />
            <DeletingActionButton action={ () => deleteTest(id) }/>
        </div>    
    )
}