'use client'

import { useState } from "react";
import type { AnswerData } from "@/essences/answer/interfaces";
import BoxXPadding from "@/views/common/ui/BoxXPadding";

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
                <input className="ml-2 p-1 border rounded-md" name="answer" type="text" onInput={handleInput} value={data}/>
            </label>      
        </BoxXPadding>
    )
}