import { AnswerOptionIndex } from "@/essences/example/description/descParser/interfaces";

type Props = Readonly<{
    children: React.ReactNode;
    index: AnswerOptionIndex
}>;

export default function AnswerOptionInExample( { children, index }: Props ) {
    return (
        <li className="flex items-baseline gap-[8px]">
            <span className="font-normal text-[18px] text-body-light leading-[24px]">{ index.toLowerCase() + "."}</span>
            {children}
        </li>
    )
}