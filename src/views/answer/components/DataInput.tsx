'use client'

import { useState } from "react";
import type { AnswerData } from "@/essences/answer/interfaces";
import BoxXPadding from "@/views/common/ui/BoxXPadding";
import TextInput from "@/views/common/ui/TextInput";

export default function ExampleAnswerInput( props: { data: AnswerData } ) {

    const [ data, setValue ] = useState<AnswerData>( props.data );

    const handleInput = ( event: React.ChangeEvent<HTMLInputElement> ) => {
        const data = event.target.value;
        setValue( data );
    }

    return (
        <BoxXPadding className="mt-8">
            <label className="">
                <span className="text-gray-700">Відповідь</span>
                <TextInput name="answer" onChange={handleInput} value={data} />
            </label>      
        </BoxXPadding>
    )
}