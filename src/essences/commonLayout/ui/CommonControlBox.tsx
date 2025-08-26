import BoxXPadding from "@/essences/commonLayout/ui/BoxXPadding";

type Props = {
    children: React.ReactNode
    className?: string
}

export default function CommonControlBox( { children, className = "" }: Props ) {
    return (
        <BoxXPadding className={`${className} w-full py-[32px] border-b-[1px] border-stroke bg-gray-light`} >
            {children}
        </BoxXPadding>
    )
}