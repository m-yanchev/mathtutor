import { notFound } from "next/navigation";
import { getTest, redirectToTests, saveResults } from "@/app/_lib/actions";
import ModelFormLayout from "@/app/_components/ModelFormLayout";
import ExampleDesc from "@/app/_components/ExampleDesc";

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {
    
    const { id } = await params
    const testId = parseInt(id)
    const test = await getTest(testId)
    if (!test) notFound()

    return (
        <ModelFormLayout 
            title={`Тест: ${test.name}`} 
            confirmButtonText="Перевірити" 
            cancelButtonText="Вийти без перевірки" 
            formAction={saveResults}
            cancelAction={redirectToTests}>
            {test.testExamples.map(({id, example, number}) => (
                <div className="mb-8 border p-4" key={example.id}>
                    <h3 className="mb-4">{`№ ${number + 1}`}</h3>
                    <ExampleDesc className="mb-4" id={example.id} description={example.description} />
                    <input type="hidden" name="testExampleIdList" value={id} />
                    <input type="text" name="answers" placeholder="Ваша відповідь" className="w-full p-2 border rounded" />
                </div>
            ))}
            <input type="hidden" name="testId" value={testId} />
        </ModelFormLayout>
    )
}