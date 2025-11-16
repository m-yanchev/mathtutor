'use client'

import { useState } from 'react'
import Example from '@/editor/components/Example'
import { ListBox, ListItemBox } from '@/views/example/ui/ListBox'
import Number from '@/views/example/number/ui/Number'
import AnswerInput from '@/views/answer/components/Input'
import Answer from '@/essences/answer/Answer'
import Test from '@/essences/test/Test'
import type { TestData } from '@/essences/test/interfaces'
import CheckButton from '../ui/CheckButton'
import ControlBox from '../ui/ControlBox'
import ExampleNumbers from './ExampleNumbers'

type Props = Readonly<{
    test: TestData
}>

export default function TestForm( props: Props ) {

    const test = Test.create( props.test )
    const defaultMissedList = test.relationTestExamples.map( () => true )
    const [missedList, setMissedList] = useState< boolean[] >( defaultMissedList )

    const handleAnswerInput = ( { answer, number }: { answer: Answer, number: number } ) => {
        setMissedList( prev => {
            const newMap = [...prev];
            newMap[number] = answer.missed;
            return newMap;
        } );
    }

    return (<>        
            <ControlBox>
                <ExampleNumbers missedList={missedList} />
                <CheckButton />
            </ControlBox>
            <ListBox>
            { test.relationTestExamples.map( ( {example}, index ) => (
                <ListItemBox key={ example.id } >
                        <Number value={ index + 1 } />
                        <Example id={example.id} content={example.description} />
                        <AnswerInput type={ example.answer.type } onInput={ ( answer ) => handleAnswerInput({ answer, number: index }) } />
                </ListItemBox>
            ) ) }
            </ListBox>
    </>)
}