import { AnswerOptionIndex } from "@/editor/descParser/interfaces";

type Props = Readonly<{
    children: React.ReactNode;
    index: AnswerOptionIndex
}>;

export default function AnswerOptionInExample( { children, index }: Props ) {
    return (
        <li className="flex items-baseline gap-[8px]">
            <span className="text-body-light">{ index.toLowerCase() + "."}</span>
            {children}
        </li>
    )
}