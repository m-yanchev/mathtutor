import HeaderBlock from "@/essences/commonLayout/ui/HeaderBlock"
import { TOP_LEVEL_LAYOUT_TITLE } from "../constants"

type Props = Readonly<{
    children: React.ReactNode
}>

export default async function TopPageHeaderBlock( { children }: Props ) {
    return (
        <HeaderBlock title={TOP_LEVEL_LAYOUT_TITLE}>
            {children}
        </HeaderBlock>
    )
}
