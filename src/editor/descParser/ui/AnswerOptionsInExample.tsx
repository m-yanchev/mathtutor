type Props = Readonly<{
    children: React.ReactNode;
    col: boolean
}>;

export default function AnswerOptionsInExample( { children, col }: Props ) {
    const rowClass = !col ? "flex-row flex-wrap gap-x-[24px] lg:gap-x-[40px] gap-y-[24px] w-full" : "flex-col gap-[24px]"
    return (
        <ol className={`flex ${rowClass}`}>
            {children}
        </ol>
    )
}