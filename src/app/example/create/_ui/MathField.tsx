import { useEffect, useState } from "react"
import { MathfieldElement } from "mathlive"
import MathItem from "./MathItem";


type MathFieldProps = {
    formulas: {id: number, latex: string}[]
    onInput: (value: string) => void
    onSelect: (value: string) => void
}

export default function MathField({formulas, onInput, onSelect} : MathFieldProps) {

    const [inputedLatex, setInputedLatex] = useState<string>("")    

    useEffect(() => {
        MathfieldElement.decimalSeparator = ","
    }, [])

    const handleInput = (event : any) => {
        const latex = event.target.value.trim()
        onInput(latex)
        setInputedLatex(latex)
    }

    const handleSelect = (latex: string) => {
        onSelect(latex)
        setInputedLatex(latex)
    }

    return (        
        <div className="w-full">
            {//@ts-ignore
            }<math-field className="w-full h-full border-solid border-2 rounded-md" onInput={handleInput}>{inputedLatex}</math-field>
            <ul className="cursor-pointer">
                {formulas.map(({id, latex}) => 
                    <li key={id} className="relative p-2 border-solid border-2 z-20 bg-white" onClick={() => handleSelect(latex)}>
                        {<MathItem className="" formula={latex}/>}
                    </li>
                )}
            </ul>
        </div>
    )
}