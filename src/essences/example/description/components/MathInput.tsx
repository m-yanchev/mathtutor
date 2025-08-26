import dynamic from "next/dynamic";
import { useState } from "react";
import { useDescEditorContext } from './EditorProvider'
import { postData, putData } from "@/app/_lib/fetchData";

const MathField = dynamic(() => import("./MathField"), { ssr: false });

type Props = Readonly<{
    submitDisabled?: boolean
}>

interface FormulasPOSTResponse {
    formulas: Formulas[]
}

interface FormulasPUTResponse {
    id: string
}

interface FormulasRequest {
    latex: string
}

type Formulas = {    
    id: number
    latex: string
}

export default function MathInput({ submitDisabled = false }: Props) {
    
    const editor = useDescEditorContext()
    const [inputedLatex, setInputedLatex] = useState<string>("")
    const [addButtonDisabled, setAddButtonDisabled] = useState<boolean>(true)
    const [formulas, setFormulas] = useState<Formulas[]>([])

    const handleInput = async (value: string) => {

        setInputedLatex(value)
        setAddButtonDisabled(value === "")
        if(value === "") {
            setFormulas([])
            return
        }
        const data = await postData<FormulasPOSTResponse, FormulasRequest>({ table: "formulas", request: {latex: value} });
        setFormulas(data.formulas)
    }

    const handleSelect = async (value: string) => {
        setInputedLatex(value)
        setFormulas([])
    }

    const handleAdd = () => {
        if (inputedLatex === "") return;
        putData<FormulasPUTResponse, FormulasRequest>({ table: "formulas", request: {latex: inputedLatex} });  
        editor?.commands.insertMath({formula: inputedLatex})
    }

    return (
        <div className={`flex justify-between items-stretch gap-4 mt-4 h-12`}>
            <MathField formulas={formulas} onInput={handleInput} onSelect={handleSelect}/>                
            <button className={"w-60 p-2 border-solid border-2 rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600"} 
                    onClick={handleAdd} 
                    disabled={addButtonDisabled || submitDisabled} 
                    type="button">
                {"Додати формулу"}
            </button>
        </div>
    )
}