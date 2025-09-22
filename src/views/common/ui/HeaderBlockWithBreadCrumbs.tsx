import HeaderBlock from "@/views/common/ui/HeaderBlock"
import type { Crumb } from "../interfaces"
import BreadCrumbs from "./BreadCrumbs"

type Props = {
    crumbs: Crumb[]
}

export default function HeaderBlockWithBreadCrumbs( { crumbs }: Props ) {
    return (
        <HeaderBlock title={crumbs[crumbs.length - 1].title} className="pb-[16px] lg:pb-[20px]" >
            <BreadCrumbs crumbs={crumbs} />
        </HeaderBlock>
    )
}