import type { ExampleResultType } from "@/essences/example/result/interfaces";

type Props = Readonly<{
    number: number
    type: ExampleResultType
}>;

export default function ExamplePoints( { number, type }: Props ) {

    const borderColorClassName = type === "completelyCorrect" ? "border-success" : 
        type === "partiallyCorrect" ? "border-[#f6c319]" : 
            "border-mistake";
    const endings = ["ів", "", "а", "а", "а", "ів", "ів", "ів", "ів", "ів"];

    return (
        <div className={`${borderColorClassName} absolute top-[24px] right-[24px] rounded-[1000px] px-[16px] py-[8px] bg-gray-light border-[1px] text-body-dark text-[16px] leading-[20px]`} >
            <span className="text-nowrap" >{`${number} бал${endings[number]}`}</span>
        </div>
    )
}