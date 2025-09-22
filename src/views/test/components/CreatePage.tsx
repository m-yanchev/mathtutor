import { createTest } from "../actions";
import UpdatingPage from "./UpdatingPage";
import UpdatePageHeaderBlock from "./UpdatePageHeaderBlock";

export default function createPage() {

    const title = "Створення тесту"

    return (<>
        <UpdatePageHeaderBlock title={title} />
        <UpdatingPage mutation={createTest} />
    </>)
}