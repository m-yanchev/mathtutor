type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TableInExample( {children}: Props ) {
    return (
        <table className="border-1">
            {children}
        </table>
    )
}