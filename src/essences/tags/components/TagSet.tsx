'use client';

import { type Tag } from "../interfaces"
import TagBox from "../ui/TagBox";
import Tags from "../ui/Tags";
import TagTitle from "../ui/TagTitle";

type Props = Readonly<{
    tags: Tag[] | undefined
    onDeleteTag?: ( (id: number) => void ) | null
    variant?: "inFilter" | "inExample"
}>

type TagProps = Readonly<{
    title: string
    onDelete?: ( () => void ) | null
}> 

export default function TagSet({tags, onDeleteTag = null, variant = "inExample"}: Props) {

    const handleDelete = (id: number) => {
        if ( !onDeleteTag ) throw new Error( "Expected onDeleteTag is no null" )
        onDeleteTag(id);
    }

    const tagsIsEmpty = !tags?.length

    return (
        <Tags>
            {tags?.map((tag) => (
                <Tag key={tag.id} title={tag.title} onDelete={ onDeleteTag !== null ? () => handleDelete(tag.id) : null } />
            ))}
            { tagsIsEmpty && variant === "inFilter" &&
            <Tag title="Усі завдання" /> }
        </Tags>
    )
}

function Tag({title, onDelete = null}: TagProps) {
    return (
        <TagBox>
            <TagTitle>
                {title}
            </TagTitle>
            { onDelete !== null &&
            <button className="ml-1 text-blue-500 hover:text-blue-700 cursor-pointer" onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 stroke-body-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button> }
        </TagBox>
    )
}