import { createExample } from "../actions"
import UpdatingBlock from "./UpdatingBlock"
import UpdatePageHeaderBlock from "./UpdatePageHeaderBlock"

export default async function CreatePage() {

    console.log("CreatePage render");

    const title = "Створення завдання"

    return (<>
        <UpdatePageHeaderBlock title={title} />
        <UpdatingBlock exampleMutation={createExample} />
    </>)
}