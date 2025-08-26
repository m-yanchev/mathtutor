'use client'

import { useState } from "react"
import { useDescEditorContext } from '@/essences/example/description/components/EditorProvider'
import { ImageEditorNodeAttributes } from "../ImageAttributes"
import { useImageProvider } from "./ImageFileProvider"

export default function ImageInput() {

    const editor = useDescEditorContext()
    const {onAdd} = useImageProvider()
    const [alt, setAlt] = useState("Картинка до опису завдання")

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0]
        if (!file) return

        const attrs = await ImageEditorNodeAttributes.createByFile({ file, alt })
        if (!attrs) return

        if ( editor?.commands.insertImage( attrs ) ) {
            onAdd(file)
        }
    }

    return (
        <div className="flex justify-between items-stretch mt-4 gap-4">
            <div className="flex-1 p-2 border-2 rounded-md">
                <label className="">Alt до картинки:</label>
                <input 
                    className="ml-2 p-1 border rounded-md" 
                    type="text" 
                    size={30} 
                    value={alt} 
                    onChange={(e) => setAlt(e.target.value)}
                />
            </div>
            <div className="flex w-60 items-center gap-4 border-2 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600">
                <input
                    type="file"
                    accept=".png"
                    onChange={handleFileChange}
                    className="hidden"
                    id="image-upload"
                />
                <label
                    htmlFor="image-upload"
                    className="flex flex-col items-center w-full"
                >
                    {"Додати зображення"}
                </label>
            </div>
        </div>
    )
}