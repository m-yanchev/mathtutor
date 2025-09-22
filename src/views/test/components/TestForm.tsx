'use client'

import { useState } from 'react'
import ExampleListBox from '@/views/example/ui/ExampleListBox'
import ExampleBox from '@/views/example/ui/ExampleBox'
import Number from '@/views/example/number/ui/Number'
import ExampleDesc from '@/views/example/description/components/ExampleDesc'
import AnswerInput from '@/views/answer/components/Input'
import Answer from '@/essences/answer/Answer'
import Test from '@/essences/test/Test'
import CheckButton from '../ui/CheckButton'
import ExampleNumbers from './ExampleNumbers'
import ControlBox from '../ui/ControlBox'
import type { TestData } from '@/essences/test/interfaces'

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
            <ExampleListBox>
            { test.relationTestExamples.map( ( {example, number }) => (
                <ExampleBox key={example.id} >
                    <Number value={ number + 1 } />
                    <ExampleDesc id={example.id} description={example.description} />
                    <AnswerInput type={ example.answer.type } onInput={ ( answer ) => handleAnswerInput({ answer, number }) } />
                </ExampleBox>
            ) ) }
            </ExampleListBox>
    </>)
}