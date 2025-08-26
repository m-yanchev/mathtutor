type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function ExampleDescLeftBox( {children}: Props ) {
    return (
        <div className="flex flex-col gap-[24px] flex-grow">
            {children}
        </div>
    )
}