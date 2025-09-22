type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function TagFilterBox( {children}: Props ) {
    return (
        <div className="box-border flex flex-col gap-[8px]">
            {children}
        </div>
    )
}