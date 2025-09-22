import { EXAMPLES_PAGE_TITLE } from "@/views/common/constants";
import HeaderBlockWithBreadCrumbs from "@/views/common/ui/HeaderBlockWithBreadCrumbs";

export default function UpdatePageHeaderBlock({ title }: { title: string }) {
    return (
        <HeaderBlockWithBreadCrumbs 
            crumbs={ [ { title: EXAMPLES_PAGE_TITLE, href: "/examples" }, { title, href: "#" } ] } />
    );
}