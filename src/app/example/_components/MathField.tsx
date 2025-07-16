import { useEffect, useState } from "react"
import "mathlive"
import MathItem from "@/app/_components/MathItem";


type Props = Readonly<{
    formulas: {id: number, latex: string}[]
    onInput: (value: string) => void
    onSelect: (value: string) => void
}>

export default function MathField({formulas, onInput, onSelect} : Props) {

    const [inputedLatex, setInputedLatex] = useState<string>("")    

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as unknown as { MathfieldElement: { decimalSeparator: string; soundsDirectory: string | null } }).MathfieldElement.decimalSeparator = ",";
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as unknown as { MathfieldElement: { decimalSeparator: string; soundsDirectory: string | null } }).MathfieldElement.soundsDirectory = null;
    }, [])

    const handleInput = (event: {target: {value: string}}) => {
        const latex = event.target.value.trim()
        onInput(latex)
        setInputedLatex(latex)
    }

    const handleSelect = (latex: string) => {
        onSelect(latex)
        setInputedLatex(latex)
    }

    return (        
        <div className="flex-1">
            <div className="w-full h-full flex items-center justify-between border-solid border-2 rounded-md">{
                //@ts-expect-error MathFieldElement is a custom element that is not recognized by TypeScript
                }<math-field className="w-full" onInput={handleInput}>{inputedLatex}</math-field>
            </div>
            {formulas.length > 0 &&
                <ul className="mt-2 p-2 border-solid border-2 rounded-md bg-gray-100 max-h-60 shadow-md overflow-y-auto">
                    {formulas.map(({id, latex}) => 
                        <li key={id} className="cursor-pointer relative p-2 border-solid border-2 z-20 bg-white" onClick={() => handleSelect(latex)}>
                            {<MathItem className="" formula={latex}/>}
                        </li>
                    )}
                </ul>
            }
        </div>
    )
}