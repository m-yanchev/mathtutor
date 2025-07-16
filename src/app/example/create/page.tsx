import ModelFormLayout from "@/app/_components/ModelFormLayout"
import { createExample, redirectToExamples } from "@/app/_lib/actions"
import DescriptionInput from "@/app/example/_components/DescriptionInput"
import ExampleAnswerInput from "@/app/example/_components/ExampleAnswerInput"
import TagsInput from "@/app/example/_components/TagsInput"
import { checkAdminAccess } from "@/app/_lib/dal"
import { redirect } from "next/navigation"

export default async function Page() {

    const adminAccess = await checkAdminAccess()
    if (!adminAccess) {
        redirect('/examples')
    }

    return (
        <ModelFormLayout title="Створення завдання" formAction={createExample} cancelAction={redirectToExamples}>
            <DescriptionInput />
            <ExampleAnswerInput />
            <TagsInput />
        </ModelFormLayout>
    )
} 