import { redirect } from "next/navigation"
import User from "@/essences/user/User"
import EditPage from "@/views/example/components/EditPage"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {

    const adminAccess = await User.checkAdminAccess()
    if (!adminAccess) {
        redirect('/examples')
    }
    
    const { id } = await params
    const exampleId = parseInt(id)

    return (
        <EditPage id={exampleId} />
    )
} 