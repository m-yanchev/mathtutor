'use client'
import { useState } from "react";

type Props = Readonly<{
    value?: string;
}>

export default function ExampleAnswerInput(props: Props) {
    const [value, setValue] = useState(props.value || "");
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(value);
    }
    return (
        <div className="w-fit mt-4 p-2 border-2 rounded-md">
            <label className="">
                <span className="text-gray-700">Відповідь</span>
                <input className="ml-2 p-1 border rounded-md" name="answer" type="text" onInput={handleInput} value={value}/>
            </label>      
        </div>
    )
}