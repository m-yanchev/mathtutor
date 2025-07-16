'use client';
import Link from "next/link";
import { ActionDeletingButton } from "./DeletingButton";
import { deleteExample, deleteTest } from "@/app/_lib/actions";

type UpdatingBarProps = Readonly<{
    model: 'example' | 'test'
    id: number
    deletingAction: (id: number) => Promise<void>
}>

type ExampleUpdatingBarProps = Readonly<{
    id: number
}>

type TestUpdatingBarProps = Readonly<{    
    id: number
}>

function UpdatingBar({model, id, deletingAction}: UpdatingBarProps) {
    return (
        <div className="flex justify-end mb-6 gap-2">
            <Link
                href={`/${model}/edit/${id}`}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Редагувати
            </Link>
            <ActionDeletingButton action={() => deletingAction(id)}/>
        </div>
    )
}

export function ExampleUpdatingBar({id}: ExampleUpdatingBarProps) {
    return (
        <UpdatingBar model="example" id={id} deletingAction={deleteExample} />
    )
}

export function TestUpdatingBar({id}: TestUpdatingBarProps) {
    return (
        <UpdatingBar model="test" id={id} deletingAction={deleteTest} />
    )
}