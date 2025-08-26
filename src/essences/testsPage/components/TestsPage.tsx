import { getTests } from "../actions";
import { getUserRole } from "@/app/_lib/dal";
import TestListBox from "../ui/TestListBox";
import Test from "@/essences/test/components/Test";
import { Fragment } from "react/jsx-runtime";
import TopPageHeaderBlock from "@/essences/topLevelLayout/components/TopPageHeaderBlock";
import TopPageNavigator from "@/essences/topLevelLayout/components/TopPageNavigator";
import PageAddingLink from "@/essences/topLevelLayout/components/EssenceAddingLink";

export default async function TestsPage() {

    const testListPromise = getTests();
    const userRolePromise = getUserRole();
    const [tests, userRole] = await Promise.all([testListPromise, userRolePromise]);

    return (
        <Fragment>
            <TopPageHeaderBlock>
                <TopPageNavigator pageName="tests" />
            </TopPageHeaderBlock>
            { userRole === "ADMIN" && 
            <PageAddingLink essence={"test"} /> }
            <TestListBox>
                { tests.map( test => (
                <Test key={test.id} content={test} access={userRole} /> ) ) }
            </TestListBox>
        </Fragment>
    )
}
