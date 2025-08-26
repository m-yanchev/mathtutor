import { PageName } from "../interfaces"
import { Header, ItemLink, NavigatorBox } from "../ui/TopPageNavigator"
import { Fragment } from "react/jsx-runtime"

type Props = Readonly<{
    pageName: PageName
}>

export default async function TopPageNavigator( { pageName }: Props ) {

    const headerTitles = [{
        pageName: "tests", titles: [ "Каталог пробних тестів", "Тести" ]
    },{
        pageName: "examples", titles: [ "Каталог окремих завдань", "Окремі завдання" ]
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
