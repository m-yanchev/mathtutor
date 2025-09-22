import Answer from "@/essences/answer/Answer";
import type { AnswerData } from "@/essences/answer/interfaces";
import OptionCorrect from "../option/components/Correct";
import RelationCorrect from "../relation/components/Correct";
import NumericalCorrect from "../numerical/components/Correct";
import  Box from "../ui/Box";

type Props = Readonly<{
    data: AnswerData;
    visible: boolean
}>;

export default function Correct( { data, visible }: Props ) {

    const answer = Answer.createByData( data );

    return (
        <Box visible={visible} >
            { answer.numerical !== undefined &&
                <NumericalCorrect value={ answer.numerical.value } /> }
            { answer.option !== undefined &&
                <OptionCorrect value={ answer.option.value } /> }
            { answer.relation !== undefined &&
                <RelationCorrect value={ answer.relation.value } /> }
        </Box>
    )
}