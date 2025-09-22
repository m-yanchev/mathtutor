"use client"

import { useState } from "react"
import type { AnswerType } from "@/essences/answer/interfaces"
import Answer from "@/essences/answer/Answer"
import NumericalInput from "../numerical/components/Input"
import OptionInput from "../option/components/Input"
import RelationInput from "../relation/components/Input"

type Props = Readonly<{
    type: AnswerType
    onInput: ( answer: Answer ) => void
}>

export default function Input( { type, onInput }: Props ) {

    const [answer, setAnswer] = useState<Answer>( Answer.createDefault(type) );

    const handle = ( answer: Answer ) => {
        setAnswer( answer );
        onInput( answer );
    }

    return (<>
        { type === "numerical" && 
            <NumericalInput onInput={handle} /> }
        { type === "option" && 
            <OptionInput onInput={handle} /> }
        { type === "relation" &&
            <RelationInput onInput={handle} /> }
        <input type="hidden" name="answers" value={answer.data} />
    </>)
}