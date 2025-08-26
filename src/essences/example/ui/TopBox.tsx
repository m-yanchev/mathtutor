type Props = Readonly<{
    children: React.ReactNode;
}>;

export default function TopBox({ children }: Props) {
    return (
        <div className="flex justify-between items-start w-full">
            {children}
        </div>
    );
} 