import dynamic from "next/dynamic";
import { useState } from "react";

const MathField = dynamic(() => import("@/app/example/create/_ui/MathField"), { ssr: false });

type MathInputProps = {
    onAdd: (latex: string) => void
    submitDisabled: boolean
}

export default function MathInput({onAdd, submitDisabled} : MathInputProps) {

    const [inputedLatex, setInputedLatex] = useState<string>("")
    const [addButtonDisabled, setAddButtonDisabled] = useState<boolean>(true)
    const [formulas, setFormulas] = useState([])

    const handleInput = async (value: string) => {

        setInputedLatex(value)
        setAddButtonDisabled(value === "")
        if(value === "") {
            setFormulas([])
            return
        }
        const response = await fetch("/api/formulas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ latex: value }),
        })
        const data = await response.json()
        setFormulas(data.formulas)
    }

    const handleSelect = async (value: string) => {
        setInputedLatex(value)
        setFormulas([])
    }

    const handleAdd = () => {

        if (inputedLatex === "") return;

        fetch("/api/formulas", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ inputedLatex }),
        })    

        onAdd(inputedLatex)
    }

    return (
        <div className={`flex justify-end gap-4 mt-5 h-12`}>
            <MathField formulas={formulas} onInput={handleInput} onSelect={handleSelect}/>                
            <button className={"w-60 p-2 border-solid border-2"} 
                    onClick={handleAdd} 
                    disabled={addButtonDisabled || submitDisabled} 
                    type="button">
                {"Додати формулу"}
            </button>
        </div>
    )
}