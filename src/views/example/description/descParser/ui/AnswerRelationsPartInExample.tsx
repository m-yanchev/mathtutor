type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function AnswerRelationsPartInExample( { children }: Props ) {
    return (
        <div className="flex flex-col gap-4">
            {children}
        </div>
    )
}