type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function RelationsPartTitle( {children}: Props ) {
    return (
        <p className="text-body-light italic">
            {children}
        </p>
    )
}