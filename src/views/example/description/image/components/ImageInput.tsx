'use client'

import { useState } from "react"
import TextInput from "@/views/common/ui/TextInput"
import InputBox from "@/views/common/ui/InputBox"
import AddActionBlock from "@/views/common/ui/AddActionBlock"
import { useDescEditorContext } from '@/views/example/description/components/EditorProvider'
import { ALT_PLACEHOLDER, DEFAULT_ALT } from "../constants"
import { useImageProvider } from "./ImageFileProvider"

export default function ImageInput() {

    const editor = useDescEditorContext()
    const {onAdd} = useImageProvider()
    const [alt, setAlt] = useState("")
    

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0]
        if (!file) return

        if ( editor?.commands.insertImage({ file, alt: alt === "" ? DEFAULT_ALT : alt }) ) {
            onAdd(file)
        }
    }

    return (
        <InputBox label="Введіть Alt до картинки" >
            <TextInput 
                value={alt} 
                onChange={(e) => setAlt(e.target.value)}
                placeholder={ALT_PLACEHOLDER}
            />
            <input
                type="file"
                accept=".png"
                onChange={handleFileChange}
                className="hidden"
                id="image-upload"
            />
            <label htmlFor="image-upload" >
                <AddActionBlock title="Картинку" />
            </label>
        </InputBox>
    )
}