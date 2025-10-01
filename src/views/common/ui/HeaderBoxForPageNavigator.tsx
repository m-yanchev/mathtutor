import HeaderBlock from "@/views/common/ui/HeaderBlock"
import { TOP_LEVEL_LAYOUT_TITLE } from "../constants"

type Props = Readonly<{
    children: React.ReactNode
}>

export default async function HeaderBoxForPageNavigator( { children }: Props ) {
    return (
        <HeaderBlock title={TOP_LEVEL_LAYOUT_TITLE} className="">
            { children }
        </HeaderBlock>
    )
}
