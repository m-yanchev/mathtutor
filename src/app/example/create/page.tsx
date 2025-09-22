import { redirect } from "next/navigation"
import User from "@/essences/user/User"
import CreatePage from "@/views/example/components/CreatePage"

export default async function Page() {

    const adminAccess = await User.checkAdminAccess()
    if (!adminAccess) {
        redirect('/examples')
    }

    return (
        <CreatePage />
    )
}