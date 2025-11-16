import { ImageAttributes } from "@/editor/extensions/Image";
import { MathfieldElement } from "mathlive";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            "math-field": React.DetailedHTMLProps<React.HTMLAttributes<MathfieldElement>, MathfieldElement>;
        }
    }
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        mathExtension: {
            insertMath: ( props : { formula: string } ) => ReturnType
        },
        answerOptionsExtension: {
            insertAnswerOptions: () => ReturnType,
            insertAnswerOptionsAtSelected: () => ReturnType,
            changeAnswerOptionsInlineStatus: () => ReturnType,
            deleteAnswerOptions: () => ReturnType
        },
        answerRelationsExtension: {
            insertAnswerRelations: () => ReturnType,
            insertAnswerRelationsAtSelected: () => ReturnType,
            deleteAnswerRelations: () => ReturnType
        },
        tableCellExtension: {
            setCellAlignLeft: () => ReturnType,
            setCellAlignCenter: () => ReturnType
        },
        paragraphExtension: {
            insertParagraph: () => ReturnType,
        },
        boldExtension: {
            markBold: () => ReturnType
        }
    }
}