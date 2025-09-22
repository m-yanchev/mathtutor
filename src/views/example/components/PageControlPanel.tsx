"use client"

import TagFilter from "@/views/tag/components/TagFilter";
import { Tag } from "@/views/tag/interfaces";
import CommonControlBox from "@/views/common/ui/CommonControlBox";
import { UserRole } from "@/essences/user/interfaces";
import EssenceAddingLink from "@/views/common/components/EssenceAddingLink";

type Props = Readonly<{
    tags: Tag[]
    userRole: UserRole
}>

export default function PageControlPanel( {tags, userRole}: Props ) {
    return (
        <CommonControlBox>
            <TagFilter tags={tags} />
            { userRole === "ADMIN" && 
                <EssenceAddingLink essence={"example"} title="Завдання" /> }            
        </CommonControlBox>
    )
}