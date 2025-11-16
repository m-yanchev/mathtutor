export default function checkJSONContent( content: string ): boolean {
    return content[0] === "{" && content[ content.length - 1 ] === "}"
}