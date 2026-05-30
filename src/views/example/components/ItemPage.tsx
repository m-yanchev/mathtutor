import BoxXPadding from "@/views/common/ui/BoxXPadding"
import Box from "../ui/Box"
import PageHeaderBlock from "./PageHeaderBlock"
import Item from "./Item"
import DataSource from "@/essences/example/DataSource"
import User from "@/essences/user/User"

type Props = Readonly<{
    id: number
}>

export default async function ItemPage( { id }: Props ) {

    const example = await DataSource.loadById(id)
    const userRole = await User.getUserRole()
    
    return (<>
        <PageHeaderBlock title="Перегляд завдання" />
        <BoxXPadding className="my-6">
            <Box>
                <Item content={example.data} isSolutionDisplay access={userRole} />
            </Box>
        </BoxXPadding>
    </>)
}