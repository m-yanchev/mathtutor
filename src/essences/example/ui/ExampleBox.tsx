type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function ExampleBox({ children }: Props) {
    return (
        <div className="flex flex-col gap-[24px] w-full rounded-[4px] border-l-[3px] p-[24px] border-violet">
            {children}
        </div>
    );
} 