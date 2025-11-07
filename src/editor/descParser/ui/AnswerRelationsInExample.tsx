type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function AnswerRelationsInExample( { children }: Props ) {
    return (
        <div className="flex flex-wrap gap-[40px] w-full">
            {children}
        </div>
    )
}