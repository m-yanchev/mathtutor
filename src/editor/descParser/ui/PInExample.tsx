type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function PInExample( {children}: Props ) {
    return (
        <p>{children}</p>
    )
}