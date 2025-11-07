import Example from "@/essences/example/DataSource"
import User from "@/essences/user/User"
import FetchJSONContent from "@/views/example/components/FetchJSONContent"
import { redirect } from "next/navigation"

export default async function Page() {

    const adminAccess = await User.checkAdminAccess()
    if (!adminAccess) {
        redirect('/')
    }
    const examples = await Example.loadDataList()

    return (
        <FetchJSONContent htmlContentPropsList={examples.map(example => example.contentProps)} />
    )
}