import { notFound, redirect } from "next/navigation"
import { checkAdminAccess } from "@/app/_lib/dal"
import ExampleUpdatingPage from "@/app/example/_components/ExampleUpatingPage"
import { getExample, updateExample } from "@/essences/example/actions"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {

    const adminAccess = await checkAdminAccess()
    if (!adminAccess) {
        redirect('/examples')
    }
    
    const { id } = await params
    const exampleId = parseInt(id)
    const example = await getExample(exampleId)

    if (!example) notFound()
    const updateExampleWithId = updateExample.bind(null, example.id)

    return (
        <ExampleUpdatingPage title="Редагування завдання" example={example} exampleMutation={updateExampleWithId} />
    )
} 