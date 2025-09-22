import AnswerRelationsInExample from "@/views/example/description/descParser/ui/AnswerRelationsInExample"

type Props = Readonly<{
    children: React.ReactNode
    key?: number 
}>

export default function AnswerRelations({ children, key }: Props) {
    return (
        <AnswerRelationsInExample key={key} >
            {children}
        </AnswerRelationsInExample>
    )
}