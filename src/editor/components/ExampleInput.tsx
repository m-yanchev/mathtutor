'use client'

import { useState } from "react"
import { EditorContent } from "@tiptap/react"
import type { ExampleData } from "@/essences/example/interfaces"
import type { ControlGroup } from "@/essences/editor/interfaces"
import ControlBox from "@/views/editor/ui/ControlBox"
import ControlButtonsBox from "@/views/editor/ui/ControlButtonsBox"
import ControlButton from "@/views/editor/ui/ControlButton"
import ImageAddIcon from "@/views/editor/ui/ImageAddIcon"
import TableUpdateIcon from "@/views/editor/table/ui/EnableBarIcon";
import MathAddIcon from "@/views/editor/ui/MathAddIcon";
import AnswerAddIcon from "@/views/editor/answer/ui/AddIcon";
import ParagraphFormatIcon from "@/views/editor/ui/ParagraphFormatIcon";
import BoxXPadding from "@/views/common/ui/BoxXPadding"
import useEditor from "../hooks/useExampleEditor"
import TableBar from "../control/table/components/Bar";
import ImageInput from "../control/image/components/ImageInput";
import MathInput from "../control/formula/components/MathInput";
import { Provider, useContext } from "./Provider"
import { AnswerBar, ParagraphBar } from "./CommandBars";


type Props = Readonly<{
    example?: ExampleData | null
}>

export default function ExampleInput({ example = undefined }: Props) {

    const { editor, jsonContent } = useEditor({ example });

    return (<>
        <Provider editor={editor}>
            <Bar/>
            <EditorExampleDescContent/>                   
        </Provider>
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

function EditorExampleDescContent() {

    const editor = useContext()

    return (
        <BoxXPadding className="mt-[45px]">
            <EditorContent 
                className="mt-4 border-[1px] p-[16px] border-stroke rounded-md shadow-dark max-h-96 overflow-y-auto"
                editor={editor}
            />
        </BoxXPadding>
    )
}