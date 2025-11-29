import BoxXPadding from "@/views/common/ui/BoxXPadding"
import Box from "../ui/Box"
import PageHeaderBlock from "./PageHeaderBlock"
import Example from "./ExampleView"
import DataSource from "@/essences/example/DataSource"
import User from "@/essences/user/User"

type Props = Readonly<{
    id: number
}>

export default async function ViewPage( { id }: Props ) {

    const example = await DataSource.loadById(id)
    const userRole = await User.getUserRole()
    
    return (<>
        <PageHeaderBlock title="Перегляд завдання" />
        <BoxXPadding className="my-[24px]">
            <Box>
                <Example content={example.data} isSolutionButtonDisplay access={userRole} />
            </Box>
        </BoxXPadding>
    </>)
}