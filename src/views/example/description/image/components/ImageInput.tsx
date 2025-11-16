'use client'

import { useState } from "react"
import TextInput from "@/views/common/ui/TextInput"
import InputBox from "@/views/common/ui/InputBox"
import AddActionBlock from "@/views/common/ui/AddActionBlock"
import { useDescEditorContext } from '@/editor/components/Provider'
import { CommandName } from "@/views/example/description/interfaces"
import { ImageExtensionAttributes } from "@/editor/Image/ImageAttributes"
import { ALT_PLACEHOLDER, DEFAULT_ALT } from "../constants"
import { useImageProvider } from "./ImageFileProvider"

export default function ImageInput() {

    const editor = useDescEditorContext()
    const {onAdd} = useImageProvider()
    const [alt, setAlt] = useState("")
    

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0]
        if ( !file ) return
        const attrs = await ImageExtensionAttributes.createByFile({ file, alt: alt === "" ? DEFAULT_ALT : alt })
        if ( !attrs ) return
        if ( editor?.executeCommand({ name: CommandName.InsertImage, options: { file, attrs } }) ) {
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