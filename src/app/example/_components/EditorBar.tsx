'use client';

import { AnswerBar, ParagraphBar, TableBar } from "./EditorCommandBars";
import ImageInput from "./ImageInput";
import MathInput from "./MathInput";

export default function EditorBar() {
    return (
        <div className="w-full">
            <ParagraphBar />
            <TableBar />
            <MathInput />
            <ImageInput />
            <AnswerBar />
        </div>
    )
}