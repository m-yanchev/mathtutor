'use client';

import { AnswerBar, ParagraphBar, TableBar } from "./EditorCommandBars";
import ImageInput from "@/essences/example/description/images/components/ImageInput";
import MathInput from "@/essences/example/description/components/MathInput";

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