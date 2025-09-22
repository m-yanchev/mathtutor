type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function ExampleBottomPanelBox({ children }: Props) {
    return (
        <div className="flex flex-col lg:flex-row gap-[24px] lg:gap-[8px] justify-end items-end w-full">
            {children}
        </div>
    );
}