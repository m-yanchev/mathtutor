import type { EssenceName } from "../interfaces";
import AddingLink from "./AddingLink";

type Props = Readonly<{
    essence: EssenceName
    title?: string
}>;

export default function EssenceAddingLink( {essence, title}: Props ) {
    return (
        <AddingLink href={`/${essence}/create`} title={title} />
    )
}