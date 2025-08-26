type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function TagFilter( {children}: Props ) {
    return (
        <div className="flex flex-col gap-[8px]">
            {children}
        </div>
    )
}