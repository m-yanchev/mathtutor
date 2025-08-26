'use client';

import DeletingButton from "@/essences/topLevelLayout/components/DeletingActionButton";
import EditingLink from "@/essences/topLevelLayout/ui/EditingLink";

type Props = Readonly<{
    model: 'example' | 'test'
    id: number
    deletingAction: (id: number) => Promise<void>
}>

export default function UpdatingBar({model, id, deletingAction}: Props) {
    return (
        <div className="flex justify-end mb-6 gap-2">
            <EditingLink href={`/${model}/edit/${id}`} />
            <DeletingButton action={() => deletingAction(id)}/>
        </div>
    )
}