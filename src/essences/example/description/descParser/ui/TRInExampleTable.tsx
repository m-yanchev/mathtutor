type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TRInExampleTable( {children}: Props ) {
    return (
        <tr className="border-1">
            {children}
        </tr>
    )
}