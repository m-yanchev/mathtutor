export default function Record( { title, value }: { title: string, value: string } ) {
    return (
        <RecordBox>
            <Title>{title}</Title>
            <Value>{value}</Value>
        </RecordBox>
    )
}

function RecordBox( { children }: { children: React.ReactNode } ) {
    return (
        <div className={`flex gap-[8px] justify-start w-full font-normal text-[18px] leading-[24px]`}>
            {children}
        </div>
    )
}

function Title( { children }: { children: string } ) {
    return (
        <span className="text-body-light">{children}</span>
    )
}

function Value( { children }: { children: string } ) {
    return (
        <span className="text-body-dark">{children}</span>
    )
}
