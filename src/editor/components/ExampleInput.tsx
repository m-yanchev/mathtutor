'use client'

import { useState } from "react"
import useDescriptionEditor from "@/editor/hooks/useDescriptionEditor"
import type { ExampleData } from "@/essences/example/interfaces"
import { EditorProvider } from "@/editor/components/Provider"
import type { ControlGroup } from "@/views/example/description/interfaces"
import ControlBox from "../ui/ControlBox"
import ControlButtonsBox from "../ui/ControlButtonsBox"
import ControlButton from "../ui/ControlButton"
import ImageAddIcon from "../ui/ImageAddIcon"
import TableBar from "../table/components/Bar";
import ImageInput from "../image/components/ImageInput";
import MathInput from "../math/components/MathInput";
import TableUpdateIcon from "../ui/table/EnableBarIcon";
import MathAddIcon from "../../../../editor/ui/MathAddIcon";
import AnswerAddIcon from "../../../../editor/ui/AnswerAddIcon";
import { AnswerBar, ParagraphBar } from "./EditorCommandBars";
import ParagraphFormatIcon from "../../../../editor/ui/ParagraphFormatIcon";


type Props = Readonly<{
    example?: ExampleData | null
}>

export default function ExampleInput({ example = undefined }: Props) {

    const { editor, jsonContent } = useDescriptionEditor({ example });

    return (<>
        <EditorProvider editor={editor}>
            <Bar/>
            <EditorExampleDescContent/>                   
        </EditorProvider>
        <input type="hidden" name="description" value={ jsonContent } />
    </>);
}

function Bar() {
    
    const [controlGroup, setControlGroup] = useState<ControlGroup>("math");

    const handleClick = ( group: ControlGroup ) => {
        setControlGroup(group);
    }

    return (
        <ControlBox>
            <ControlButtonsBox>
                <ControlButton onClick={ () => handleClick("image") } >
                    <ImageAddIcon active={ controlGroup === "image" } />
                    Зображення
                </ControlButton>
                <ControlButton onClick={ () => handleClick("table") } >
                    <TableUpdateIcon active={ controlGroup === "table" } />
                    Таблиця
                </ControlButton>
                <ControlButton onClick={ () => handleClick("math") } >
                    <MathAddIcon active={ controlGroup === "math" } />
                    Формула
                </ControlButton>
                <ControlButton onClick={ () => handleClick("answers") } >
                    <AnswerAddIcon active={ controlGroup === "answers" } />
                    Відповіді
                </ControlButton>
                <ControlButton onClick={ () => handleClick("paragraph") } >
                    <ParagraphFormatIcon active={ controlGroup === "paragraph" } />
                    Параграф
                </ControlButton>
            </ControlButtonsBox>
            { controlGroup === "paragraph" && 
            <ParagraphBar /> }
            { controlGroup === "table" && 
            <TableBar /> }
            { controlGroup === "math" && 
            <MathInput /> }
            { controlGroup === "image" && 
            <ImageInput /> }
            { controlGroup === "answers" && 
            <AnswerBar /> }
        </ControlBox>
    )
}