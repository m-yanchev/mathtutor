import AnswerOptionInExample from "@/editor/descParser/ui/AnswerOptionInExample"
import { AnswerOptionIndex } from "../interfaces"

type Props = Readonly<{
    children: React.ReactNode
    index: AnswerOptionIndex
    key?: number 
}>

export default function AnswerOption({ children, key, index }: Props) {
    return (
        <AnswerOptionInExample key={key} index={index}>
            {children}
        </AnswerOptionInExample>
    )
}