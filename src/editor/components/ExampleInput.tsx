'use client'

import { useState } from "react"
import type { ExampleData } from "@/essences/example/interfaces"
import type { ControlGroup, EditorType } from "@/essences/editor/interfaces"
import ControlBox from "@/views/editor/ui/ControlBox"
import ControlButtonsBox from "@/views/editor/ui/ControlButtonsBox"
import ControlButton from "@/views/editor/ui/ControlButton"
import ImageAddIcon from "@/views/editor/ui/ImageAddIcon"
import TableUpdateIcon from "@/views/editor/table/ui/EnableBarIcon";
import MathAddIcon from "@/views/editor/ui/MathAddIcon";
import AnswerAddIcon from "@/views/editor/answer/ui/AddIcon";
import ParagraphFormatIcon from "@/views/editor/ui/ParagraphFormatIcon";
import useEditor from "../hooks/useEditor"
import TableBar from "../control/table/components/Bar";
import ImageInput from "../control/image/components/ImageInput";
import MathInput from "../control/formula/components/MathInput";
import Content from "../ui/Content"
import { Provider } from "./Provider"
import { AnswerBar, ParagraphBar } from "../control/components/CommandBars";


type Props = Readonly<{
    example?: ExampleData | null
}>

export default function ExampleInput({ example = undefined }: Props) {

    const { condition, solution } = useEditor({ example });
    const [ type, setType ] = useState<EditorType>("condition");

    const handleSelect = ( selectedType: EditorType ) => {
        setType( selectedType );
    }

    const currentEditor = type === "condition" ? condition : solution;

    return (<>
        <Provider editor={ currentEditor.editor || null } >
            <Bar/>
        </Provider>
        <Content editor={ condition.editor || null } onSelect={ () => handleSelect("condition") } />                 
        <input type="hidden" name="description" value={ condition.content || "" } />
        <Content editor={ solution.editor || null } onSelect={ () => handleSelect("solution") } />                 
        <input type="hidden" name="solution" value={ solution.content || "" } />
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