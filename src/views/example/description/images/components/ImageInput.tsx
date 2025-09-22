'use client'

import { useState } from "react"
import { useDescEditorContext } from '@/views/example/description/components/EditorProvider'
import TextInput from "@/views/common/ui/TextInput"
import { ImageEditorNodeAttributes } from "../ImageAttributes"
import InputBox from "../../../../common/ui/InputBox"
import { useImageProvider } from "./ImageFileProvider"
import { ALT_PLACEHOLDER, DEFAULT_ALT } from "../constants"
import AddActionBlock from "@/views/common/ui/AddActionBlock"

export default function ImageInput() {

    const editor = useDescEditorContext()
    const {onAdd} = useImageProvider()
    const [alt, setAlt] = useState("")
    

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0]
        if (!file) return

        const attrs = await ImageEditorNodeAttributes.createByFile({ file, alt: alt === "" ? DEFAULT_ALT : alt })
        if (!attrs) return

        if ( editor?.commands.insertImage( attrs ) ) {
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