import { Fragment } from "react/jsx-runtime";
import TopPageHeaderBlock from "@/views/common/components/TopPageHeaderBlock";
import TopPageNavigator from "@/views/common/components/TopPageNavigator";
import User from "@/essences/user/User";
import CardsBox from "../ui/CardsBox";
import Card from "./Card";
import PageControlPanel from "./PageControlPanel";
import DataSource from "@/essences/test/DataSource";

export default async function CardsPage() {

    const testListPromise = DataSource.loadList();
    const userRolePromise = User.getUserRole();
    const [tests, userRole] = await Promise.all([testListPromise, userRolePromise]);

    return (
        <Fragment>
            <TopPageHeaderBlock>
                <TopPageNavigator pageName="tests" />
            </TopPageHeaderBlock>
            <PageControlPanel userRole={userRole} />
            <CardsBox>
                { tests.map( test => (
                <Card key={test.id} content={test} access={userRole} /> ) ) }
            </CardsBox>
        </Fragment>
    )
}
