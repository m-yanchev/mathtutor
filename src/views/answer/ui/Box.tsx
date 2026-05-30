type Props = Readonly<{
    children: React.ReactNode;
    visible: boolean
}>;

export default function Box( { children, visible }: Props ) {
    const visibleClass = visible ? "" : "invisible"

    return (
        <div className={`w-full ${visibleClass}`}>
            {children}
        </div>
    )
}