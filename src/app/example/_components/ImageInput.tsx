import { useState } from "react"
import { useEditor } from './EditorProvider'

export default function ImageInput() {

    const editor = useEditor()
    const [alt, setAlt] = useState("Картинка до опису завдання")

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        
        const file = event.target.files?.[0]
        if (!file) return

        const bitmap = await createImageBitmap(file)
        const previewUrl = URL.createObjectURL(file)
        editor?.commands.insertImage({
            src: previewUrl,
            width: bitmap.width,
            height: bitmap.height,
            alt: alt,
            lastmodified: file.lastModified.toString()
        })
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
            <div className="flex w-60 items-center gap-4 border-2 rounded-md">
                <input
                    type="file"
                    name="image"
                    accept=".png"
                    onChange={handleFileChange}
                    className="hidden"
                    id="image-upload"
                />
                <label
                    htmlFor="image-upload"
                    className="flex items-center justify-center h-full w-full p-2 bg-blue-500 text-white cursor-pointer rounded-md hover:bg-blue-600"
                >
                    {"Додати зображення"}
                </label>
            </div>
        </div>
    )
}