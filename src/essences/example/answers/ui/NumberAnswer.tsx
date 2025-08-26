type Props = Readonly<{
    value: string;
    visible: boolean
}>;

export default function NumberAnswer( { value, visible }: Props ) {
    const visibleClass = visible ? "visible" : "invisible hidden lg:flex"
    return (
        <div className={`flex gap-[8px] justify-start w-full font-normal text-[18px] leading-[24px] ${visibleClass}`}>
            <span className="text-body-light">Вірна відповідь:</span>
            <span className="text-body-dark">{value}</span>
        </div>
    )
}