import BoxXPadding from "@/views/common/ui/BoxXPadding";

type Props = {
    children: React.ReactNode
    className?: string
}

export default function CommonControlBox( { children, className = "" }: Props ) {
    return (
        <BoxXPadding className={`flex z-5 sticky top-[62px] justify-between w-full py-[16px] lg:py-[32px] border-b-[1px] border-stroke bg-gray-light ${className}`} >
            {children}
        </BoxXPadding>
    )
}