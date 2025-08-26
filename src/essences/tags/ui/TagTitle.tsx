type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function TagTitle( {children}: Props ) {
    return (
        <span className="font-normal text-[16px] leading-[20px] text-violet text-nowrap">
            {children}
        </span>
    )
}