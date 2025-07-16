import { notFound, redirect } from "next/navigation"
import { getTest, redirectToTests, updateTest } from "@/app/_lib/actions"
import ModelFormLayout from "@/app/_components/ModelFormLayout"
import NameInput from "@/app/test/_components/NameInput"
import ExampleListInput from "@/app/test/_components/ExampleListInput"
import { checkAdminAccess } from "@/app/_lib/dal"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {

    const adminAccess = await checkAdminAccess()
    if (!adminAccess) {
        redirect('/tests')
    }

    const { id } = await params
    const testId = parseInt(id)
    const test = await getTest(testId)

    if (!test) notFound()
    const updateTestWithId = updateTest.bind(null, test.id)

    const examples = test.testExamples.sort((a, b) => a.number - b.number).map(({ example }) => example)

    return (
        <ModelFormLayout title="Редагування тесту" formAction={updateTestWithId} cancelAction={redirectToTests}>
            <NameInput value={test.name} />
            <ExampleListInput examples={examples} />
        </ModelFormLayout>
    )
}
