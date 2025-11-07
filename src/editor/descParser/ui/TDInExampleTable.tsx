type Props = Readonly<{
    children: React.ReactNode;
    align: "left" | "center"
}>;

export default function TDInExampleTable( { children, align}: Props ) {
    const alignClass = align === "center" ? "text-center" : "text-left";
    return (
        <td className={`border border-black py-1 px-2 ${alignClass}`}>
            {children}
        </td>
    )
}