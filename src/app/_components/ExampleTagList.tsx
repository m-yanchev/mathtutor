'use client';
import { TagRecord } from "@/app/_lib/tags"

type ExampleTagListProps = Readonly<{
    tags: TagRecord[]
    onDeleteTag?: (id: number) => void
}>

type TagProps = Readonly<{
    title: string
    onDelete: () => void
}> 

export default function ExampleTagList({tags, onDeleteTag}: ExampleTagListProps) {

    const handleDelete = (id: number) => {
        if (onDeleteTag) {
            onDeleteTag(id);
        }
    }

    return (
        <ul className="flex flex-wrap gap-2 mt-6">
            {tags.map((tag) => (
                <li key={tag.id}>
                    <Tag title={tag.title} onDelete={() => handleDelete(tag.id)}/>
                </li>
            ))}
        </ul>
    )
}

function Tag({title, onDelete}: TagProps) {
    return (
        <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                {title}
            </span>
            <button className="ml-1 text-blue-500 hover:text-blue-700" onClick={onDelete}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}