'use client'

import { useRef, useState } from "react"
import MathInput from "./MathInput"

type PositionCursorEvent = React.MouseEvent<HTMLTextAreaElement, MouseEvent> | React.KeyboardEvent<HTMLTextAreaElement>

export default function MathDescriptionInput() {

    const [textCurPosition, SetTextCurPosition] = useState<number | null>(null)
    const textareaRef = useRef<HTMLTextAreaElement>(null)    

    const handleCursorPosition = (event: PositionCursorEvent) => {
        const textarea = event.target as HTMLTextAreaElement
        SetTextCurPosition(textarea.selectionStart)
    }

    const handleAddingMF = (latex: string) => {
        const textarea = textareaRef.current
        if (textarea !== null && textCurPosition !== null) {
            const prevValue = textarea.value
            const str = `\\(${latex}\\)`
            textarea.value = prevValue.slice(0, textCurPosition) + str + prevValue.slice(textCurPosition)
            SetTextCurPosition(textCurPosition + str.length + 4)
        }
    }

    return (
        <div className="w-full">
            <textarea   className="grow border-solid border-2 w-full"
                        ref={textareaRef}
                        onClick={handleCursorPosition} 
                        onKeyUp={handleCursorPosition}
                        rows={10} 
                        name="description"/>
            <MathInput  onAdd={handleAddingMF} submitDisabled={textCurPosition === null}/>
        </div>
    )
}
