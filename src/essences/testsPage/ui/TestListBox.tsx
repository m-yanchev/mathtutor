import BoxXPadding from "@/essences/commonLayout/ui/BoxXPadding";

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TestListBox( { children }: Props ) {
    return (
        <BoxXPadding className="flex flex-wrap flex-col lg:flex-row mt-[32px] lg:mt-[40px] gap-[8px] lg:gap-[24px]">
            {children}
        </BoxXPadding>
    )
}