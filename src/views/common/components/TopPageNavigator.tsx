import { Fragment } from "react/jsx-runtime"
import { PageName } from "@/views/common/interfaces"
import { Header, ItemLink, NavigatorBox } from "../ui/TopPageNavigator"
import { EXAMPLES_PAGE_TITLE, TESTS_PAGE_TITLE } from "../constants"

type Props = Readonly<{
    pageName: PageName
}>

export default async function TopPageNavigator( { pageName }: Props ) {

    const headerTitles = [{
        pageName: "tests", titles: [ TESTS_PAGE_TITLE, "Тести" ]
    },{
        pageName: "examples", titles: [ EXAMPLES_PAGE_TITLE, "Окремі завдання" ]
    }]

    return (
        <NavigatorBox>
            { headerTitles.map( headerTitle => (
            <Fragment key={headerTitle.pageName} >                
                { pageName !== headerTitle.pageName ?
                <ItemLink href={`/${headerTitle.pageName}`}>{headerTitle.titles}</ItemLink> :
                <Header>{headerTitle.titles}</Header> }
            </Fragment>) ) }
        </NavigatorBox>
    )
}
