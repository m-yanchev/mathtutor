import BoxXPadding from "@/essences/commonLayout/ui/BoxXPadding";

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function ExampleListBox( { children }: Props ) {
    return (
        <BoxXPadding className="flex flex-col gap-[24px] mt-[32px] mb-[32px]">
            {children}
        </BoxXPadding>
    )
}