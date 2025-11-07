'use client'

import { useEffect, useState } from "react";
import { getTagsFromServer, putTagInServer } from "@/views/tag/actions";
import TagSet from "./TagSet"
import { Tag } from "@prisma/client";
import TagSelect from "../ui/TagSelect";
import TagFilter from "../ui/TagFilterBox";
import TagList from "../ui/TagList";
import TextInput from "@/views/common/ui/TextInput";

type Props = Readonly<{
    onChange: ( tagSetIdList: number[] ) => void
    tags?: Tag[]
    variant?: "inFilter" | "inExample"
}>

type SelectProps = Readonly<{
    variant?: "inFilter" | "inExample"
    onAdd: ( tag: Tag ) => void
}>

type TagSelectForExampleEditorProps = Readonly<{
    onInput: ( value: string ) => void
    value: string
}>

type AddButtonProps = Readonly<{
    disabled?: boolean
    onClick: () => void
}>

export default function TagSetConstructor( { onChange, tags = [], variant = "inExample" }: Props ) {

    const [tagSet, setTagSet] = useState< Tag[] >(tags);

    const handleAddTag = ( { id, title }: Tag ) => {
        if (!id) {
            throw new Error(`wrong id, his value is ${id} with title: ${title}`)
        }
        setTagSet( (prev) => [ ...prev, { id, title } ] );
        onChange( [ ...tagSet.map( ({id}) => id ), id ] )
    }

    const handleDeleteTag = ( id: number ) => {
        setTagSet( (prev) => prev.filter( tag => tag.id !== id ) );
        onChange( tagSet.map( tag => tag.id ).filter( tagId => tagId !== id ) )
    }

    return (
        <TagFilter>
            <Select onAdd={handleAddTag} variant={variant} />
            <TagSet tags={tagSet} onDeleteTag={handleDeleteTag} variant={variant} />
        </TagFilter>
    )
}

function Select({ onAdd, variant = "inExample"}: SelectProps) {

    const [inputedTag, setInputedTag] = useState<Tag | null>(null)
    const [tagList, setTagList] = useState<Tag[]>([]);

    const allowedAdd = variant === "inExample"

    useEffect(() => {     
        const setFetchedTagList = async () => {
            if ( inputedTag === null || inputedTag.id !== 0 ) { 
                setTagList([]);
                return;
            }
            const {tags} = await getTagsFromServer({titleBegining: inputedTag.title});
            setTagList(tags);
        }   
        setFetchedTagList();
    }, [inputedTag]);

    const initNotLoadedTagFromField = (title: string) => title.trim() === "" ? null : { id: 0, title }

    const handleInput = ( value: string ) => {
        setInputedTag( initNotLoadedTagFromField(value) )
    }

    const handleTagSelect = (tag: Tag) => {
        setInputedTag(tag)
        setTagList([]);
        if (!allowedAdd) onAdd(tag)
    }

    const putTag = async (title: string): Promise<number> => {
        const {id} = await putTagInServer({ title })
        return id
    }

    const handleAddButtonClick = async () => {
        if ( inputedTag === null ) throw new Error( "null is not expected value for inputedTag here" )
        setInputedTag(null)
        if ( inputedTag.id !== 0 ) {
            onAdd(inputedTag)
        } else {
            const id = await putTag(inputedTag.title)
            if (!id) throw new Error(`wrong id, his value is ${id} with title: ${inputedTag.title}`)
            onAdd( { id, title: inputedTag.title} )
        }        
    }

    const addButtonIsDisabled = inputedTag === null || ( !allowedAdd && inputedTag.id === 0 )
    const tagTitle = inputedTag?.title || ""

    return (
        <div className="z-10 flex gap-4 items-stretch">
            <div className="flex-1">
                { variant === "inExample" ?
                <TagSelectForExampleEditor onInput={handleInput} value={tagTitle} /> :
                <TagSelect onInput={handleInput} value={tagTitle} /> }
                {tagList.length > 0 &&
                    <TagList tagList={tagList} onSelect={handleTagSelect}/>
                }
            </div>
            { allowedAdd &&
            <AddButton onClick={handleAddButtonClick} disabled={addButtonIsDisabled} /> }
        </div>
    )
}

function TagSelectForExampleEditor( { onInput, value }: TagSelectForExampleEditorProps ) {

    const handleInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const value = event.target.value
        onInput(value)
    }

    return (
        <TextInput placeholder="Введіть тег" onChange={handleInput} value={value} />
    )
}

function AddButton({onClick, disabled}: AddButtonProps) {

    return (
        <button 
            onClick={ onClick } 
            type={ "button"} 
            className="w-60 p-2 border-solid border-2 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
            disabled={disabled}>
            {"Додати тег"}
        </button>
    )
}