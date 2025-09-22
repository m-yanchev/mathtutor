type Props = Readonly<{
    children?: React.ReactNode;
}>;

export default function TagBox( {children}: Props ) {
    return (
        <li className="flex rounded-[8px] px-[10px] py-[4px] bg-stroke">
            {children}
        </li>
    )
}