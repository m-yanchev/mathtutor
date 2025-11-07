type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TBodyInExampleTable( {children}: Props ) {
    return (
        <tbody>
            {children}
        </tbody>
    )
}