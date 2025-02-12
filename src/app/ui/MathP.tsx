import katex from "katex";
import "katex/dist/katex.min.css";

type MathPProps = Readonly<{
  className?: string 
  children: string;
}>

export default function MathP({ className, children }: MathPProps) {
  // Функция для замены LaTeX-формул на HTML
  const renderMath = (text: string): string => {
    const regex = /\$\$(.+?)\$\$|\\\((.+?)\\\)/g;
    return text.replace(regex, (match, displayMath, inlineMath) => {
      try {
        if (displayMath) {
          return katex.renderToString(displayMath, { displayMode: true });
        }
        if (inlineMath) {
          return katex.renderToString(inlineMath, { displayMode: false });
        }
      } catch (error) {
        console.error("Error rendering math:", error);
        return match; // Вернуть исходный текст в случае ошибки
      }
      return match;
    });
  };

  const renderedContent = renderMath(children);

  return (
    <p className={className}
      dangerouslySetInnerHTML={{
        __html: renderedContent,
      }}
    />
  );
}
