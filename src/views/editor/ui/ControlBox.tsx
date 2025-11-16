import CommonControlBox from "@/views/common/ui/CommonControlBox";

export default function ControlBox( {children}: { children?: React.ReactNode } ) {
    return (
        <CommonControlBox className="flex-col gap-[24px] bg-gray-light">
            {children}
        </CommonControlBox>
    )
}