'use client';

import type { EssenceName } from "@/views/common/interfaces";
import Button from "./Button";
import EditingIcon from "../icons/Editing";

type Props = Readonly<{
    id: number
    essence: EssenceName
}>

export default function EssenceEditingLink( { essence, id }: Props ) {
    return (
        <Button href={`/${essence}/edit/${String(id)}`} variant="small" >
            <EditingIcon />
            Редагувати
        </Button>
    )
}