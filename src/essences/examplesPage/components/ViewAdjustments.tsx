"use client"

import TagFilter from "@/essences/tags/components/TagFilter";
import { Tag } from "@/essences/tags/interfaces";
import ViewAdjustmentsBox from "@/essences/commonLayout/ui/CommonControlBox";

type Props = Readonly<{
    tags: Tag[]
}>

export default function ViewAdjustments( {tags}: Props ) {
    return (
        <ViewAdjustmentsBox>
            <TagFilter tags={tags} />
        </ViewAdjustmentsBox>
    )
}