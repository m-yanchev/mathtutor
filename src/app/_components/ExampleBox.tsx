export default function ExampleBox({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-100 p-5 rounded-lg shadow-md mb-8">
            {children}
        </div>
    );
}