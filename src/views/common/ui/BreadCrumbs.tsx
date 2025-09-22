import Link from "next/link";
import { TOP_LEVEL_LAYOUT_TITLE } from "../constants";
import type { Crumb } from "../interfaces";

type Props = Readonly<{
    crumbs: Crumb[]
}>;

export default function BreadCrumbs( { crumbs }: Props ) {
    return (
        <nav aria-label="Breadcrumb" className="z-10 flex flex-wrap items-center gap-[8px] text-[16px] text-gray-light leading-[18px] lg:leading-[20px] text-nowrap">
            <div className="flex justify-center items-center size-[18px] fill-gray-light" >
                <svg width="17" height="12" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.24797 6.59995L7.02437 10.3751L6.17477 11.2235L0.951172 5.99995L6.17477 0.775146L7.02437 1.62475L3.24797 5.39995H16.7996V6.59995H3.24797Z" />
                </svg>
            </div>
            <CrumbLink href="/" >{TOP_LEVEL_LAYOUT_TITLE}</CrumbLink>
            { crumbs.map( ( crumb, index ) => (
                <BreadCrumbItem key={index} title={crumb.title} href={crumb.href} />
            ) ) }
        </nav>
    )
}

function BreadCrumbItem( { title, href }: { title: string; href: string } ) {
    return (<>
            <div className="w-0 h-[16px] border-[1px] border-gray-light" />
            <CrumbLink href={href}>{title}</CrumbLink>
    </>);
}

function CrumbLink( { children, href }: { children: React.ReactNode; href: string } ) {
    return (
        <Link href={href} className="hover:underline">{children}</Link>
    )
}