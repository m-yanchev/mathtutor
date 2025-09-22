"use server"

import Form from 'next/form'
import { saveResults } from '@/views/test/result/actions'
import Header from '@/views/common/ui/HeaderBlockWithBreadCrumbs';
import TestForm from './TestForm';
import DataSource from '@/essences/test/DataSource';

type Props = {
    id: number
}

export default async function TestPage( {id}: Props ) {

    const test = await DataSource.loadById(id)
    
    return (<>
        <Header crumbs={ [ { title: "Каталог пробних тестів", href: "/tests" }, { title: test.name, href: `/tests/${test.id}` } ] } />
        <Form action={saveResults}>
            <TestForm test={ test.data } />
            <input type="hidden" name="testId" value={test.id} />
            { test.relationTestExamples.map( ({id}) => (
                <input key={id} type="hidden" name="testExampleIdList" value={id} />
            ) ) }            
        </Form>
    </>)
}
