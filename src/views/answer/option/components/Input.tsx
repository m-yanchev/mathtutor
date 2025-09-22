import { useState } from "react";
import Answer from "@/essences/answer/Answer";
import type { OptionInput } from "@/essences/answer/interfaces";
import Record from "../ui/Record";

export default function Input( { onInput }: { onInput: ( answer: Answer ) => void } ) {

    const [answer, setAnswer] = useState<Answer>(Answer.createDefault("option"));

    const handle = ( inputed: OptionInput ) => {
        const answer = Answer.createOption( inputed );
        onInput( answer );
        setAnswer( answer );
    }

    return (<>
            { answer.option && 
            <Record onClick={handle} map={answer.option?.map} /> }
    </>)
}