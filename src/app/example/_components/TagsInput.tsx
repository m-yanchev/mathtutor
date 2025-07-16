'use client';
import { useEffect, useState } from "react";
import ExampleTagList from "@/app/_components/ExampleTagList";
import { postData, putData } from "@/app/_lib/fetchData";
import type { TagsPUTRequest, TagRecord, TagsPOSTRequest, TagsPUTResponse, TagsPOSTResponse } from "@/app/_lib/tags";

type TagsInputProps = Readonly<{
    tags?: TagRecord[]
}>

type SelectProps = Readonly<{
    onInput: (value: string) => void
    value: string
}>

type AddButtonProps = Readonly<{
    onClick: () => void
}>

export default function TagsInput(props: TagsInputProps) {

    const [inputedTag, setInputedTag] = useState<string>("");
    const [tags, setTags] = useState<TagRecord[]>(props.tags || []);

    const handleClick = async () => {
        if (inputedTag.trim() === "") {
            return;
        }
        const { id } = await putData<TagsPUTResponse, TagsPUTRequest>({ table: "tags", request: { title: inputedTag } })
        setTags((prev) => [...prev, { id: Number(id), title: inputedTag }]);
        setInputedTag("");
    }

    const handleInput = (value: string) => {
        setInputedTag(value);
    }

    const handleDeleteTag = (id: number) => {
        setTags((prev) => prev.filter(tag => tag.id !== id));
    }

    return (
        <div className="flex flex-col gap-2">
            <Select onInput={handleInput} value={inputedTag}/>
            <AddButton onClick={handleClick} />
            <ExampleTagList tags={tags} onDeleteTag={handleDeleteTag}/>
            <input type="hidden" name="tags" value={tags.map(tag=>String(tag.id)).join(",")} />
        </div>
    )
}

function Select({onInput, value}: SelectProps) {

    const [tags, setTags] = useState<TagRecord[]>([]);
    const [blockFetchTags, setBlockFetchTags] = useState<boolean>(false);

    useEffect(() => {
        const fetchTags = async () => {
            if (value === "") { 
                setTags([]);
                return;
            }
            const data = await postData<TagsPOSTResponse, TagsPOSTRequest>({ table: "tags", request: { tagBegin: value } });
            setTags(data.tags);
        }
        if(!blockFetchTags) fetchTags();
    }, [value, blockFetchTags]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;        
        onInput(value);
        setBlockFetchTags(false);
    }

    const handleSelect = (value: string) => {
        onInput(value);
        setBlockFetchTags(true);
        setTags([]);
    }

    return (
        <div className="flex flex-col gap-2">
            <input className="mt-4 p-2 border-2 border-gray-300 rounded" 
                type="text" 
                placeholder="Введіть тег" 
                onInput={handleInput} 
                value={value} />
            {tags.length > 0 &&
                <ul className="border-2 border-gray-300 rounded p-2 bg-gray-100 shadow-md max-h-60 overflow-y-auto">
                    {tags?.map((tag) => (
                        <li key={tag.id} className="cursor-pointer relative p-2 border-solid border-2 z-20 bg-white" onClick={() => handleSelect(tag.title)}>
                            {tag.title}
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

function AddButton({onClick}: AddButtonProps) {

    return (
        <button onClick={ onClick } type={ "button"} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
            {"Додати тег"}
        </button>
    )
}