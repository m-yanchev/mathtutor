type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function ExampleDescBox( {children}: Props ) {
    return (
        <div className="flex flex-col lg:flex-row items-start gap-[24px] w-full">
            {children}
        </div>
    )
}