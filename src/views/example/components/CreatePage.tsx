import { createExample } from "../actions"
import UpdatingBlock from "./UpdatingBlock"
import UpdatePageHeaderBlock from "./PageHeaderBlock"

export default async function CreatePage() {

    const title = "Створення завдання"

    return (<>
        <UpdatePageHeaderBlock title={title} />
        <UpdatingBlock exampleMutation={createExample} />
    </>)
}