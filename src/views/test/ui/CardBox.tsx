type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function CardBox({ children }: Props) {
    return (
        <div 
            className="flex flex-col bg-white rounded-[16px] shadow-drop p-[24px] gap-[16px] lg:gap-[24px]">
            {children}
        </div>
    );
} 