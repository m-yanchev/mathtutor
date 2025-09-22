import AnswerRelationsPartInExample from "@/views/example/description/descParser/ui/AnswerRelationsPartInExample"
import { ParserComponentProps } from "../../interfaces"

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