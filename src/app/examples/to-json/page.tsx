import { redirect } from "next/navigation"
import Example from "@/essences/example/DataSource"
import User from "@/essences/user/User"
import FetchJSONContent from "@/essences/editor/FetchJSONContent"
import checkJSONContent from "@/editor/checkJSONContent"

export default async function Page() {

    const adminAccess = await User.checkAdminAccess()
    if (!adminAccess) {
        redirect('/')
    }
    const examples = await Example.loadDataList()
    const htmlContentPropsList = examples.map(example => example.contentProps)
        .filter( ({content}) => {
            console.log( 'Checking content:', content )
            const res = !checkJSONContent( content )
            console.log( 'Content check result:', res )
            return res 
        } )

    return (
        <FetchJSONContent htmlContentPropsList={htmlContentPropsList} />
    )
}