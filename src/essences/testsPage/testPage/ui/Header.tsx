import HeaderBlock from "@/essences/commonLayout/ui/HeaderBlock"
import BreadCrumbs from "./BreadCrumbs"

type Props = {
    title: string
}

export default function Header( {title}: Props ) {
    return (
        <HeaderBlock title={title} className="pb-[16px] lg:pb-[20px]" >
            <BreadCrumbs title={title} />
        </HeaderBlock>
    )
}