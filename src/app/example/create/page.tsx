import { redirect } from "next/navigation"
import { checkAdminAccess } from "@/app/_lib/dal"
import ExampleUpdatingPage from "@/app/example/_components/ExampleUpatingPage"
import { createExample } from "@/essences/example/actions"

export default async function Page() {

    const adminAccess = await checkAdminAccess()
    if (!adminAccess) {
        redirect('/examples')
    }

    return (
        <ExampleUpdatingPage title="Створення завдання" exampleMutation={createExample} />
    )
}