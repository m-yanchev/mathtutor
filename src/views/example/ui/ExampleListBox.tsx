import BoxXPadding from "@/views/common/ui/BoxXPadding";

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function ExampleListBox( { children }: Props ) {
    return (
        <BoxXPadding className="flex flex-col gap-[24px] my-[24px]">
            {children}
        </BoxXPadding>
    )
}