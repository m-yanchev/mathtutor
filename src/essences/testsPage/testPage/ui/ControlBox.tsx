import CommonControlBox from "@/essences/commonLayout/ui/CommonControlBox";

type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function ControlBox( { children }: Props ) {
    return (
        <CommonControlBox className="flex flex-col lg:flex-row items-end lg:items-start gap-[24px] lg:gap-[40px]">
            {children}
        </CommonControlBox>
    )
}