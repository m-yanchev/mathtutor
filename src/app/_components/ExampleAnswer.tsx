type Props = Readonly<{
    value: string | null;
}>

export default function ExampleAnswer({ value }: Props) {
    return (
        <div className="w-full mt-6">
            <span className="text-gray-700">Відповідь:</span>
            <span className="ml-2 p-1 border rounded-md bg-gray-50">
                {value ? value : "Відповідь не вказана"}
            </span>
        </div>
    )
}