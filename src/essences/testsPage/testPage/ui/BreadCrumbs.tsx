import { TOP_LEVEL_LAYOUT_TITLE } from "@/essences/topLevelLayout/constants";
import Link from "next/link";

type Props = Readonly<{
    title: string
}>;

export default function BreadCrumbs( { title }: Props ) {
    return (
        <Link href="/tests" className="flex flex-wrap items-center gap-[8px] text-[16px] text-gray leading-[18px] lg:leading-[20px] text-nowrap">
            <div className="flex justify-center items-center size-[18px] fill-gray" >
                <svg width="17" height="12" viewBox="0 0 17 12" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.24797 6.59995L7.02437 10.3751L6.17477 11.2235L0.951172 5.99995L6.17477 0.775146L7.02437 1.62475L3.24797 5.39995H16.7996V6.59995H3.24797Z" />
                </svg>
            </div>
            <span>{TOP_LEVEL_LAYOUT_TITLE}</span>
            <div className="w-0 h-[16px] border-[1px] border-gray" />
            <span>{title}</span>
        </Link>
    )
}