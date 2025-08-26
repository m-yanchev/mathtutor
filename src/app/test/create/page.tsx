import { redirect } from "next/navigation";
import ModelFormLayout from "@/app/test/_components/ModelFormLayout";
import NameInput from "@/app/test/_components/NameInput";
import ExampleListInput from "@/app/test/_components/ExampleListInput";
import { checkAdminAccess } from "@/app/_lib/dal";
import { createTest, redirectToTests } from "@/essences/test/actions";

export default async function Page() {

    const adminAccess = await checkAdminAccess()
    if (!adminAccess) {
        redirect('/tests')
    }

    return (
        <ModelFormLayout title="Створення тесту" formAction={createTest} cancelAction={redirectToTests}>
            <NameInput />
            <ExampleListInput />
        </ModelFormLayout>
    )
}