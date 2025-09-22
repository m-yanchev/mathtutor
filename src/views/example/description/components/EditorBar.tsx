'use client';

import { useState } from "react";
import TableBar from "../table/components/Bar";
import ImageInput from "../images/components/ImageInput";
import MathInput from "../math/components/MathInput";
import ControlBox from "../ui/ControlBox";
import ControlButtonsBox from "../ui/ControlButtonsBox";
import ControlButton from "../ui/ControlButton";
import ImageAddIcon from "../ui/ImageAddIcon";
import TableUpdateIcon from "../table/ui/EnableBarIcon";
import MathAddIcon from "../ui/MathAddIcon";
import AnswerAddIcon from "../ui/AnswerAddIcon";
import { ControlGroup } from "../interfaces";
import { AnswerBar, ParagraphBar } from "./EditorCommandBars";
import ParagraphFormatIcon from "../ui/ParagraphFormatIcon";

export default function EditorBar() {
    
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