'use client';

import { useState } from "react";
import type { Tag } from "@/essences/tags/interfaces";
import TagSetConstructor from "./TagSetConstructor";

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
        <div className="mt-4">
            <TagSetConstructor onChange={handleTagSetChange} tags={tags} variant="inExample" />
            <input type="hidden" name="tags" value={ tagSetIdList.join(",") } />
        </div>
    )
}