import DataSource from "@/essences/example/DataSource"
import { updateExample } from "../actions"
import ExampleUpdatingPage from "./UpdatingPage"
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
        <ExampleUpdatingPage example={example.data} exampleMutation={updateExampleWithId} />
    </>)
} 