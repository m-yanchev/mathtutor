type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function NumericalBox( { children }: Props ) {
    return (
        <div className="flex flex-col gap-[8px]">
            {children}
        </div>
    )
}