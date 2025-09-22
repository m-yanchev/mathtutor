type Props = Readonly<{
    children: React.ReactNode;
    align: "left" | "center"
}>;

export default function TDInExampleTable( { children, align}: Props ) {
    return (
        <td className={`border-1 text-${align}`}>
            {children}
        </td>
    )
}