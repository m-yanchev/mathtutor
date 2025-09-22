type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function RelationsPartTitle( {children}: Props ) {
    return (
        <p className="font-normal text-[18px] leading-[24px] text-body-light italic">
            {children}
        </p>
    )
}