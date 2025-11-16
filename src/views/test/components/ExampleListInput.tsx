'use client';

import { useEffect, useState } from "react";
import ExampleDesc from "@/editor/descParser/components/ExampleDesc";
import ExampleTagList from "@/views/tag/components/TagSet";
import DeletingButton from "@/views/common/ui/DeletingButton";
import BoxXPadding from "@/views/common/ui/BoxXPadding";
import TextInput from "@/views/common/ui/TextInput";
import { TestExample } from "@/essences/test/TestExample";
import Example from "@/essences/example/Example";
import InputBox from "@/views/common/ui/InputBox";
import { ListBox, ListItemBox } from "@/views/example/ui/ListBox";
import Box from "@/views/example/ui/Box";

type ExampleListInputProps = Readonly<{
    testExamples: TestExample[]
}>

type SearchProps = Readonly<{
    onChoose: ( testExample: TestExample ) => void
}>

type ListProps = Readonly<{
    testExamples: TestExample[]
    onDelete: ( index: number ) => void
}>

type SearchButtonProps = Readonly<{
    onClick: () => void
    children: React.ReactNode
}>

export default function ExampleListInput( props: ExampleListInputProps ) {

    const [ testExamples, setTestExamples ] = useState< TestExample[] >( props.testExamples );

    const handleChoose = ( testExample: TestExample ) => {
        if ( testExamples.some( te => te.example.id === testExample.example.id ) ) {
            return;
        }
        setTestExamples( prev => [...prev, testExample] );
    }

    const handleDelete = (index: number) => {
        setTestExamples( prev => prev.filter( ( _, i ) => i !== index ));
    }

    return (
        <div className="flex flex-col gap-8 mt-8">
            <Search onChoose={handleChoose} />
            <List testExamples={testExamples} onDelete={handleDelete}/>
        </div>
    )
}

function Search( {onChoose}: SearchProps ) {

    const [ index, setIndex ] = useState<number>(0);
    const [ examples, setExamples ] = useState< Example[] >([]);

    const getExamples = async () => {
        const examples = await Example.getAllFromServer();
        setExamples( examples );
    }

    useEffect( () => {
        getExamples();
    }, []);

    const handleAddClick = () => {
        if ( examples.length === 0 ) return;
        onChoose( TestExample.createByExample( examples[index] ) );
    }

    return (
        <BoxXPadding>
            {examples.length > 0 && 
                <Box>
                    <div className="flex justify-between items-center">
                        <SearchButton 
                            onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : examples.length - 1))}>
                            Попередній
                        </SearchButton>
                        <button
                            type="button"
                            className="px-3 py-1 bg-green-500 text-white rounded-sm hover:bg-green-600"
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
                </Box>
            }
        </BoxXPadding>
    )
}

function List({ testExamples, onDelete }: ListProps) {
    return (
        <ListBox>
            <h2 className="text-2xl font-bold mb-4">Список завдань</h2>
            { testExamples.map(( { example, cost }, index ) => (
                <ListItemBox key={ example.id } >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <h3 className="text-lg font-semibold">Завдання №{ index + 1 }</h3>
                        </div>
                        <DeletingButton onClick={ () => onDelete(index) } />
                    </div>
                    <ExampleDesc description={ example.description } id={ example.id } />
                    <InputBox label="Вартість правильної відповіді" htmlFor="costs">
                        <TextInput 
                            name="costs" 
                            id="costs" 
                            defaultValue={ String(cost) } 
                            placeholder="Введіть вартість правильної відповіді" />
                    </InputBox>
                    <ExampleTagList tags={ example.tags } />
                    <input type="hidden" name="ExampleIds" value={ example.id } />
                </ListItemBox>
            ))}
        </ListBox>
    )
}

function SearchButton({ onClick, children}: SearchButtonProps) {
    return (
        <button 
            onClick={onClick}
            type="button"
            className="px-3 py-1 bg-gray-300 rounded-sm hover:bg-gray-400">
            {children}
        </button>
    )
}

