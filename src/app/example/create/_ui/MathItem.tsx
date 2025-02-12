import katex from "katex";
import "katex/dist/katex.min.css";

type MathItemProps = {
    className?: string
    formula: string;
};

export default function MathItem({ className, formula } : MathItemProps) {
    
    const mathHTML = { __html: katex.renderToString(formula, { throwOnError: false }) }

    return (
        <span className={className} dangerouslySetInnerHTML={mathHTML} />
    )
}