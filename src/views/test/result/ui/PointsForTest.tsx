type Props = Readonly<{
    total: number
    value: number
}>;

type ValueProps = Readonly<{
    label: string
    value: string
}>;

type SpanProps = Readonly<{
    className?: string
    children?: string
}>

export default function TestResult( { total, value }: Props ) {
    return (
        <div className="self-start lg:self-auto flex flex-col gap-[8px]">
            <Value label="Ваш результат:" value={ String(value) } />
            <Value label="Максимальний:" value={ String(total) } />
        </div>
    )
}

function Value( { label, value }: ValueProps ) {
    return (
        <div className="flex gap-[8px]" >
            <Span className="text-body-light text-nowrap" >
                {label}
            </Span>
            <Span>
                {value}
            </Span>
        </div>
    )
}

function Span( { className, children }: SpanProps ) {
    return (
            <span className={ `${className} text-[16px] lg:text-[18px] leading-[20px] lg:leading-[24px]` } >
                {children}
            </span>
    )
}