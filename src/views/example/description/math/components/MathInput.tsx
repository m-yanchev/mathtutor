import dynamic from "next/dynamic";
import { useState } from "react";
import { useDescEditorContext } from '@/views/example/description/components/EditorProvider'
import { putData } from "@/app/_lib/fetchData";
import type { Formulas, LatexListFindingResult } from "../interfaces";
import { BEGINING_GET_PARAM } from "../constants";
import InputBox from "@/views/common/ui/InputBox";
import AddActionBlock from "@/views/common/ui/AddActionBlock";

const MathField = dynamic(() => import("./MathField"), { ssr: false });

type Props = Readonly<{
    submitDisabled?: boolean
}>

interface FormulasPUTResponse {
    id: string
}

interface FormulasRequest {
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
        const result = await getLatexListFromServer(value);
        setFormulas(result.latexList)
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
        <InputBox label="Введіть формулу" >
            <MathField formulas={formulas} onInput={handleInput} onSelect={handleSelect}/>                
            <button onClick={handleAdd} disabled={addButtonDisabled || submitDisabled} type="button" >
                <AddActionBlock title="Формулу" />
            </button>
        </InputBox>
    )
}

async function getLatexListFromServer( latex: string ): Promise<LatexListFindingResult> {
    const response = await fetch(`/api/formulas?${BEGINING_GET_PARAM}=${encodeURIComponent(latex)}`)
    if (!response.ok) {
        throw new Error(`Failed to fetch formulas: ${response.statusText}`)
    }
    return response.json()
}