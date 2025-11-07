type Props = Readonly<{
    children: string;
}>;

export default function StrongInExample( {children}: Props ) {
    return (
        <strong className="font-bold">
            {children}
        </strong>
    )
}