import Link from "next/link"

type NavigatorBoxProps = Readonly<{
    children: React.ReactNode
}>

type ItemLinkProps = Readonly<{
    href: string
    children: string[]
}>

type HeaderProps = Readonly<{
    children: string[]
}>

type ItemBoxProps = Readonly<{
    children: React.ReactNode
}>

type TitleProps = Readonly<{
    children: string[]
}>

export function NavigatorBox( {children}: NavigatorBoxProps ) {
    return (
        <nav className="h-[44px] lg:h-[60px] flex gap-[8px] lg:gap-[16px] font-medium text-[20px] leading-[24px] lg:leading-[28px]">
            {children}
        </nav>
    )
}

export function ItemLink( {href, children}: ItemLinkProps ) {
    return (
        <Link href={href} className="text-gray">
            <ItemBox><Title>{children}</Title></ItemBox>
        </Link>
    )
}

export function Header( {children}: HeaderProps ) {
    return (
        <div className="rounded-t-[16px] text-body-dark bg-gray-light">
            <ItemBox><h2><Title>{children}</Title></h2></ItemBox>
        </div>
    )
}

function ItemBox( {children}: ItemBoxProps ) {
    return (
        <div className="flex items-center justify-center h-full px-[16px] lg:px-[24px]">
            {children}
        </div>
    )
}

function Title( {children}: TitleProps ) {
    return (<>
        <span className="hidden lg:inline">{children[0]}</span>
        <span className="inline lg:hidden">{children[1]}</span>
    </>)
}
