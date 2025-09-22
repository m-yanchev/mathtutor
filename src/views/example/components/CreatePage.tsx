import { createExample } from "../actions"
import UpdatingPage from "./UpdatingPage"
import UpdatePageHeaderBlock from "./UpdatePageHeaderBlock"

export default async function CreatePage() {

    const title = "Створення завдання"

    return (<>
        <UpdatePageHeaderBlock title={title} />
        <UpdatingPage exampleMutation={createExample} />
    </>)
}