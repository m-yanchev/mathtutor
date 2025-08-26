type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function BottomPanelBox({ children }: Props) {
    return (
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[8px] justufy-between items-end w-full">
            {children}
        </div>
    );
}