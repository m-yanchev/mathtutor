import { redirect } from "next/navigation";
import User from "@/essences/user/User";
import CreatePage from "@/views/test/components/CreatePage";

export default async function Page() {

    const adminAccess = await User.checkAdminAccess()
    if (!adminAccess) {
        redirect('/tests')
    }

    return (
        <CreatePage />
    )
}