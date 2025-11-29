import { useState } from "react";
import Answer from "@/essences/answer/Answer";
import Box from "../ui/Box";
import OptionBox from "../../option/ui/Box";
import Record from "../../option/ui/Record";

export default function Input( { onInput }: { onInput: ( answer: Answer ) => void } ) {

    const [answer, setAnswer] = useState<Answer>(Answer.createDefault("relation"));

    const handle = ( inputed: number, index: number ) => {
        if ( answer.relation === undefined ) throw new Error("Relation answer is undefined");
        const options = answer.relation.optionValues;
        options[index] = inputed;
        const newAnswer = Answer.createRelation( options );
        onInput( newAnswer );
        setAnswer( newAnswer );
    }

    return (<>
            { answer.relation && 
            <Box>
                { answer.relation.maps.map( ( map, index ) => (
                <OptionBox key={index} index={index}>
                    <Record map={map} onClick={ (inputed) => handle( inputed, index ) } />
                </OptionBox>
                ) ) }
            </Box> }
    </>)
}