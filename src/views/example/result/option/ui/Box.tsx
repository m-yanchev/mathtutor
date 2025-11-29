import ResultBox from "@/views/example/result/ui/Box";

export default function Box( { children, index }: { children: React.ReactNode, index?: number } ) {
    return (
        <ResultBox>
            { index !== undefined && 
                <span className="text-body-light">{index + 1}.</span> }
            {children}
        </ResultBox>
    )
}