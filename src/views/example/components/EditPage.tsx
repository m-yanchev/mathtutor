import DataSource from "@/essences/example/DataSource"
import { updateExample } from "../actions"
import UpdatingBlock from "./UpdatingBlock"
import UpdatePageHeaderBlock from "./UpdatePageHeaderBlock"

type Props = Readonly<{
    id: number
}>

export default async function EditPage( {id} : Props ) {

    const example = await DataSource.loadById(id)
    const updateExampleWithId = updateExample.bind(null, example.id)
    const title = "Редагування завдання"

    return (<>
        <UpdatePageHeaderBlock title={title} />
        <UpdatingBlock example={example.data} exampleMutation={updateExampleWithId} />
    </>)
} 