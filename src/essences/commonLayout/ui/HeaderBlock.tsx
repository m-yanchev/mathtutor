import BoxXPadding from "./BoxXPadding";

type Props = Readonly<{
    title: string
    children?: React.ReactNode
    className?: string
}>

export default function HeaderBlock( { title, children, className = "" }: Props ) {
    return (
        <BoxXPadding className={`${className} flex flex-col justify-between min-h-[204px] lg:min-h-[211px] w-full bg-blue pt-[40px] lg:pt-[64px]`} >
            <h1 className="font-semibold text-[32px] lg:text-[36px] leading-[40px] lg:leading-[48px] text-black">
                {title}
            </h1>
            {children}
        </BoxXPadding>
    )
}