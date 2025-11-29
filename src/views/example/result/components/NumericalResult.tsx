import type { NumericalAnswer } from "@/essences/answer/interfaces";
import Correct from "@/views/example/result/numerical/components/Correct";
import Record from "@/views/example/result/numerical/ui/Record";
import NumericalAnswerBox from "../ui/NumericalBox";
import Missed from "../ui/Missed";
import Box from "../ui/Box";

type Props = Readonly<{
    correct: NumericalAnswer;
    result: NumericalAnswer;
}>;

export default function NumericalResult( { correct, result }: Props ) {

    return (
        <Box>
            <NumericalAnswerBox>
                <Correct value={correct.value} />
                { !result.missed && 
                <Record value={result.value} title="Ваша відповідь:" /> }
            </NumericalAnswerBox>
            <Missed hidden={ !result.missed } />
        </Box>
    )
}