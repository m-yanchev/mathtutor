import type { Answer } from "@/essences/answer/interfaces";
import NumericalAnswer from "./NumericalResult";
import OptionAnswer from "./OptionResult";
import RelationAnswer from "./RelationResult";

type Props = Readonly<{
    value: Answer
    correct: Answer
}>;

export default function Result( { value, correct }: Props ) {

    return (<>
        { correct.type === "numerical" && correct.numerical && value.numerical &&
            <NumericalAnswer correct={ correct.numerical } result={ value.numerical } /> 
        }
        { correct.type === "option" && correct.option && value.option &&
            <OptionAnswer map={ correct.option.resultMap( value.option ) } missed={ value.option.missed } /> 
        }
        { correct.type === "relation" && correct.relation && value.relation &&
            <RelationAnswer result={ value.relation } maps={ correct.relation.resultMaps( value.relation ) } /> }
    </>)
}