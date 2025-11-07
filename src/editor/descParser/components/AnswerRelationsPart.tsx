import AnswerRelationsPartInExample from "@/editor/descParser/ui/AnswerRelationsPartInExample"
import type { ParserComponentProps } from "@/views/example/description/interfaces"

type Props = Readonly<{
    Title: ( props: ParserComponentProps ) => React.ReactNode
    Options: ( props: ParserComponentProps ) => React.ReactNode 
    key?: number
}>

export default function AnswerRelationsPart({ Title, Options, key }: Props) {
    return (
        <AnswerRelationsPartInExample key={key} >
            <Title/>
            <Options/>
        </AnswerRelationsPartInExample>
    )
}