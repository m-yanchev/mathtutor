import type { EssenceName } from "../interfaces";
import AddingLink from "../ui/AddingLink";

type Props = Readonly<{
    essence: EssenceName
}>;

export default function EssenceAddingLink( {essence}: Props ) {
    return (
        <AddingLink href={`/${essence}/create`} />
    )
}