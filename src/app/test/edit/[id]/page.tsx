import { redirect } from "next/navigation"
import User from "@/essences/user/User"
import EditPage from "@/views/test/components/EditPage"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {

    const adminAccess = await User.checkAdminAccess()
    if (!adminAccess) {
        redirect('/tests')
    }

    const { id } = await params
    const testId = parseInt(id)

    return (
        <EditPage id={testId} />
    )
}
