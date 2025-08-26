type Props = Readonly<{
    correctAnswer: string
    yourAnswer: string
}>;

type ValueProps = Readonly<{
    label: string
    value: string
}>;

export default function ExampleResult( { correctAnswer, yourAnswer }: Props ) {
    return (
        <div className="flex flex-col gap-[8px]">
            <Value label="Ваша відповідь:" value={ yourAnswer } />
            <Value label="Вірна відповідь:" value={ correctAnswer } />
        </div>
    )
}

function Value( { label, value }: ValueProps ) {
    return (
        <div className="flex gap-[8px]" >
            <span className="text-body-light text-nowrap" >
                {label}
            </span>
            <span>
                {value}
            </span>
        </div>
    )
}