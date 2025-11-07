type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TableInExample( {children}: Props ) {
    return (
        <table className="border-collapse mb-4 text-left">
            {children}
        </table>
    )
}