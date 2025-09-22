type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function Tags( {children}: Props ) {
    return (
        <ul className="z-0 flex gap-[8px] flex-wrap">
            {children}
        </ul>
    )
}