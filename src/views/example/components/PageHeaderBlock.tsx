import { EXAMPLES_PAGE_TITLE } from "@/views/common/constants";
import HeaderBlockWithBreadCrumbs from "@/views/common/ui/HeaderBlockWithBreadCrumbs";

type Props = Readonly<{
    title: string,
}>;

export default function PageHeaderBlock( props: Props ) {

    const crumbs = [{
        title: EXAMPLES_PAGE_TITLE,
        href: "/examples"
    }, {
        title: props.title,
        href: "#"
    }]

    return (
        <HeaderBlockWithBreadCrumbs 
            crumbs={ crumbs } />
    );
}