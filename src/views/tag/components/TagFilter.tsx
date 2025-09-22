'use client'

import { redirect } from "next/navigation";
import TagSetConstructor from "./TagSetConstructor";
import { getTagIdListString } from "../helpers";
import { Tag } from "../interfaces";

type Props = Readonly<{
    tags: Tag[]
}>

export default function TagFilter({tags}: Props) {

    const handleTagSetChange = ( tagSetIdList: number[] ) => {
        const tagIdListString = getTagIdListString(tagSetIdList);
        redirect(`/examples/${tagIdListString}`)
    }

    return (
        <TagSetConstructor onChange={handleTagSetChange} tags={tags} variant="inFilter" />
    )
}