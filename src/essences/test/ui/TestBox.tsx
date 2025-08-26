type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TestBox({ children }: Props) {
    return (
        <div 
            className="flex flex-col gap-1">
            {children}
        </div>
    );
} 