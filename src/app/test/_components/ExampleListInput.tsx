'use client';

import ExampleDesc from "@/app/_components/ExampleDesc";
import ExampleTagList from "@/app/_components/ExampleTagList";
import { Example } from "@/app/_lib/Example";
import { postData } from "@/app/_lib/fetchData";
import { useEffect, useState } from "react";

interface ExamplePOSTResponse {
    examples: Example[]
}

type ExampleListInputProps = Readonly<{
    examples?: Example[]
}>

type SearchProps = Readonly<{
    onChoose: (example: Example) => void
}>

type ListProps = Readonly<{
    examples: Example[]
    onDelete: (index: number) => void
}>

type SearchButtonProps = Readonly<{
    onClick: () => void
    children: React.ReactNode
}>

export default function ExampleListInput(props: ExampleListInputProps) {
    const [examples, setExamples] = useState<Example[]>(props.examples || []);
    const handleChoose = (example: Example) => {
        if (examples.some(e => e.id === example.id)) {
            return;
        }
        setExamples((prev) => [...prev, example]);  
    }
    const handleDelete = (index: number) => {
        setExamples((prev) => prev.filter((_, i) => i !== index));
    }
    return (
        <div className="flex flex-col gap-4">
            <Search onChoose={handleChoose}/>
            <List examples={examples} onDelete={handleDelete}/>
            <input type="hidden" name="examples" value={examples.map(e => String(e.id)).join(",")} />
        </div>
    )
}

function Search({onChoose}: SearchProps) {
    const [index, setIndex] = useState<number>(0);
    const [examples, setExamples] = useState<Example[]>([]);

    useEffect( () => {
        postData<ExamplePOSTResponse, null>({ table: "examples", request: null }).then( data => {
            setExamples(data.examples);
        } ).catch( () => {
            setExamples([]);
        });        
    }, []);

    const handleAddClick = () => {
        if (examples.length === 0) return;
        onChoose(examples[index]);
    }

    return (
        <div className="border-2 p-4 rounded-lg bg-white shadow-md mb-12">
            {examples.length > 0 && 
                <div className="flex flex-col gap-8">
                    <div className="flex justify-between items-center">
                        <SearchButton 
                            onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : examples.length - 1))}>
                            Попередній
                        </SearchButton>
                        <button
                            type="button"
                            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                            onClick={handleAddClick}>
                            Додати
                        </button>
                        <SearchButton 
                            onClick={() => setIndex((prev) => (prev < examples.length - 1 ? prev + 1 : 0))}>
                            Наступний
                        </SearchButton>
                    </div>            
                    <ExampleDesc description={examples[index].description} id={examples[index].id} />
                    <ExampleTagList tags={examples[index].tags} />
                </div>
            }
        </div>
    )
}

function List({examples, onDelete}: ListProps) {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4">Список завдань</h2>
            {examples.map((example, index) => (
                <div key={example.id} className="border-2 p-4 rounded-lg bg-gray-100 shadow-md mb-4">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <h3 className="text-lg font-semibold">Завдання №{index + 1}</h3>
                        </div>
                        <button 
                            onClick={() => onDelete(index)}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                            type="button">
                            Видалити
                        </button>
                    </div>
                    <ExampleDesc description={example.description} id={example.id} />
                    <ExampleTagList tags={example.tags} />
                </div>
            ))}
        </div>
    )
}

function SearchButton({ onClick, children}: SearchButtonProps) {
    return (
        <button 
            onClick={onClick}
            type="button"
            className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400">
            {children}
        </button>
    )
}

