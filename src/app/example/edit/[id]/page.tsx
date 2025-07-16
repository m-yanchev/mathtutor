import { notFound, redirect } from "next/navigation"
import { getExample, redirectToExamples, updateExample } from "@/app/_lib/actions"
import ModelFormLayout from "@/app/_components/ModelFormLayout"
import DescriptionInput from "@/app/example/_components/DescriptionInput"
import ExampleAnswerInput from "@/app/example/_components/ExampleAnswerInput"
import TagsInput from "@/app/example/_components/TagsInput"
import { checkAdminAccess } from "@/app/_lib/dal"

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
        <ModelFormLayout title="Редагування завдання" formAction={updateExampleWithId} cancelAction={redirectToExamples}>
            <DescriptionInput example={example} />
            <ExampleAnswerInput value={example.answer || ""} />
            <TagsInput tags={example.tags}/>
        </ModelFormLayout>
    )
} 