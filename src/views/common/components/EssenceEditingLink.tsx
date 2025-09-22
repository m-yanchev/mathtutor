'use client';

import type { EssenceName } from "@/views/common/interfaces";
import EditingLink from "../ui/EditingLink";

type Props = Readonly<{
    id: number
    essence: EssenceName
}>

export default function EssenceEditingLink( { essence, id }: Props ) {
    return (
        <EditingLink href={`/${essence}/edit/${String(id)}`} />
    )
}