'use client';

import { useState } from "react";
import type { Tag } from "@/views/tag/interfaces";
import TagSetConstructor from "./TagSetConstructor";
import BoxXPadding from "@/views/common/ui/BoxXPadding";

type Props = Readonly<{
    tags?: Tag[]
    onChange?: ( tagSetIdList: number[] ) => void
}>

export default function TagSetInput( { tags = [], onChange }: Props ) {

    const [tagSetIdList, setTagSetIdList] = useState< number[] >( tags.map( ({id}) => id ) );

    const handleTagSetChange = ( tagSetIdList: number[] ) => {
        tagSetIdList.forEach( id => {
            if (!id) throw new Error(`wrong id, his value is ${id} in tagSetIdList: ${tagSetIdList}`)
        } )
        setTagSetIdList(tagSetIdList)
        onChange?.(tagSetIdList)
    }

    return (
        <BoxXPadding className="mt-8">
            <TagSetConstructor onChange={handleTagSetChange} tags={tags} variant="inExample" />
            <input type="hidden" name="tags" value={ tagSetIdList.join(",") } />
        </BoxXPadding>
    )
}