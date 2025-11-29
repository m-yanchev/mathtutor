import AddingIcon from "../icons/Adding";
import type { EssenceName } from "../interfaces";
import Button from "./Button";

type Props = Readonly<{
    essence: EssenceName
    title?: string
}>;

export default function EssenceAddingLink( {essence, title}: Props ) {
    return (
        <Button href={`/${essence}/create`} variant="largeOrange" >
            <AddingIcon />
            {`Додати ${title ?? ""}`}
        </Button>
    )
}