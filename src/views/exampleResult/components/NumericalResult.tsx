import type { NumericalAnswer } from "@/essences/answer/interfaces";
import Correct from "@/views/answer/numerical/components/Correct";
import Record from "@/views/answer/numerical/ui/Record";
import NumericalAnswerBox from "../ui/NumericalBox";
import Missed from "../ui/Missed";

type Props = Readonly<{
    correct: NumericalAnswer;
    result: NumericalAnswer;
}>;

export default function NumericalResult( { correct, result }: Props ) {

    return (<>
        <NumericalAnswerBox>
            <Correct value={correct.value} />
            { !result.missed && 
            <Record value={result.value} title="Ваша відповідь:" /> }
        </NumericalAnswerBox>
        <Missed hidden={ !result.missed } />
    </>)
}