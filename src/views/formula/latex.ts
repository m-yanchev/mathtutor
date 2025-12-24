import katex from "katex";
import "katex/dist/katex.min.css";

export default function latexToHTML(latex: string) {
    return katex.renderToString(latex, { throwOnError: false, strict: false, output: "html" });
}