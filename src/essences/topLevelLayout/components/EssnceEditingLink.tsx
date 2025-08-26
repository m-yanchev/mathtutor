'use client';

import EditingLink from "@/essences/topLevelLayout/ui/EditingLink";
import type { EssenceName } from "../interfaces";

type Props = Readonly<{
    id: number
    essence: EssenceName
}>

export default function EssenceEditingLink( { essence, id }: Props ) {
    return (
        <EditingLink href={`/${essence}/edit/${String(id)}`} />
    )
}