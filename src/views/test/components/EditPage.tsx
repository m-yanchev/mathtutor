import DataSource from "@/essences/test/DataSource";
import { updateTest } from "../actions";
import UpdatePageHeaderBlock from "./UpdatePageHeaderBlock";
import UpdatingPage from "./UpdatingPage";

export default async function EditPage( {id}: {id: number} ) {

    const test = await DataSource.loadById(id)
    const updateTestWithId = updateTest.bind(null, test.id)
    const title = "Редагування тесту"
    
    return (<>
        <UpdatePageHeaderBlock title={title} />
        <UpdatingPage data={test.data} mutation={updateTestWithId} />
    </>);
}