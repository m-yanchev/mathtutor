import AnswerOptionsInExample from "@/essences/example/description/descParser/ui/AnswerOptionsInExample"

type Props = Readonly<{
    children: React.ReactNode
    col: boolean
    key?: number 
}>

export default function AnswerOptions({ children, key, col }: Props) {
    return (
        <AnswerOptionsInExample key={key} col={col}>
            {children}
        </AnswerOptionsInExample>
    )
}