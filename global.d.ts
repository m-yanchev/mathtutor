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
        leftBoxExtension: {
            selectLeftBox: () => ReturnType,
        },
        mathExtension: {
            insertMath: (props : {formula: string}) => ReturnType
        },
        imageExtension: {
            insertImage: (props : {src: string, alt: string, width: number, height: number, lastmodified: string}) => ReturnType,
            setSource: (props : {src: string}) => ReturnType
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
            insertParagraph: () => ReturnType
        }
    }
}