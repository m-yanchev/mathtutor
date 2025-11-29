import BoxXPadding from "@/views/common/ui/BoxXPadding";

export default function BoxForInput( props: { children: React.ReactNode } ) {
    return (
        <BoxXPadding className="mt-[24px]">
            {props.children}
        </BoxXPadding>
    )
}