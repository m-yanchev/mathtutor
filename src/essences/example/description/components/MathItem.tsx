import latexToHTML from "@/app/_lib/latex";

type MathItemProps = {
    className?: string
    formula: string;
};

export default function MathItem({ className, formula } : MathItemProps) {
    
    const mathHTML = { __html: latexToHTML(formula) }

    return (
        <span className={className} dangerouslySetInnerHTML={mathHTML} />
    )
}