import Answer from "@/essences/answer/Answer";
import InputUI from "../ui/Input";

export default function Input( { onInput }: { onInput: ( answer: Answer ) => void } ) {

    const handle = ( value: string ) => {
        const answer = Answer.createNumerical( value );
        onInput( answer );
    }

    return (
        <InputUI onInput={handle} />
 )
}