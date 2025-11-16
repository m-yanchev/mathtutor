'use client'

import { useState } from "react"
import TextInput from "@/views/common/ui/TextInput"
import InputBox from "@/views/common/ui/InputBox"
import AddActionBlock from "@/views/common/ui/AddActionBlock"
import { CommandName } from "@/essences/editor/interfaces"
import { ALT_PLACEHOLDER, DEFAULT_ALT } from "@/views/editor/constants"
import { useImageProvider } from "@/views/editor/image/components/ImageFileProvider"
import { useContext } from '@/editor/components/Provider'
import { ImageExtensionAttributes } from "@/editor/ImageAttributes"

export default function ImageInput() {

    const editor = useContext()
    const {onAdd} = useImageProvider()
    const [alt, setAlt] = useState("")
    

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0]
        if ( !file ) return
        const attrs = await ImageExtensionAttributes.createByFile({ file, alt: alt === "" ? DEFAULT_ALT : alt })
        if ( !attrs ) return
        if ( editor?.commands[CommandName.InsertImage]({ file, attrs }) ) {
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