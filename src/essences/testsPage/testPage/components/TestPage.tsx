"use server"

import Form from 'next/form'
import { getTest } from "@/essences/test/actions";
import { notFound } from "next/navigation";
import ExampleDesc from "@/essences/example/description/components/ExampleDesc";
import ControlBox from '../ui/ControlBox';
import ExampleNumbers from '../ui/ExampleNumbers';
import TestCheckButton from '../ui/TestCheckButton';
import ExampleListBox from '@/essences/examplesPage/ui/ExampleListBox';
import ExampleBox from '@/essences/example/ui/ExampleBox';
import Number from '@/essences/example/number/ui/Number';
import AnswerInput from '../ui/AnswerInput';
import { saveResults } from '../resultsPage/actions';
import Header from '../ui/Header';

type Props = {
    id: number
}

export default async function TestPage( {id}: Props ) {

    const test = await getTest(id)
    if (!test) notFound()

    return (
        <Form action={saveResults}>
            <Header title={ test.name } />
            <ControlBox>
                <ExampleNumbers count={test.testExamples.length} />
                <TestCheckButton />
            </ControlBox>
            <ExampleListBox>
            {test.testExamples.map(({id, example, number}) => (
                <ExampleBox key={example.id} >
                    <Number value={ number + 1 } />
                    <ExampleDesc id={example.id} description={example.description} />
                    <input type="hidden" name="testExampleIdList" value={id} />
                    <AnswerInput />
                </ExampleBox>
            ))}
            </ExampleListBox>
            <input type="hidden" name="testId" value={test.id} />
        </Form>
    )
}
