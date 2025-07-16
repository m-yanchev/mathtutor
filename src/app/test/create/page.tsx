import { redirect } from "next/navigation";
import ModelFormLayout from "@/app/_components/ModelFormLayout";
import { createTest, redirectToTests } from "@/app/_lib/actions";
import NameInput from "@/app/test/_components/NameInput";
import ExampleListInput from "@/app/test/_components/ExampleListInput";
import { checkAdminAccess } from "@/app/_lib/dal";

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