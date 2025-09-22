import CommonControlBox from "@/views/common/ui/CommonControlBox";

type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function ControlBox( { children }: Props ) {
    return (
        <CommonControlBox className="flex-col lg:flex-row items-end lg:items-center gap-[24px] lg:gap-[40px]">
            {children}
        </CommonControlBox>
    )
}