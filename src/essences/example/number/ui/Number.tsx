type Props = Readonly<{
    value: number;
}>;

export default function Number( {value}: Props ) {
    return (
        <div className="flex w-fit rounded-[8px] px-[10px] py-[4px] bg-stroke">
            <h2 className="text-[16px] leading-[20px] text-violet">
                {`Завдання ${value}`}
            </h2>
        </div>
    )
}