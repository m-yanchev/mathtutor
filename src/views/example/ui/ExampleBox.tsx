type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function ExampleBox({ children }: Props) {
    return (
        <div className="relative flex flex-col gap-[24px] w-full rounded-[16px] border-[1px] p-[24px] border-stroke shadow-drop">
            {children}
        </div>
    );
} 