import Link from "next/link";
import AddActionBlock from "../ui/AddActionBlock";

type Props = Readonly<{
    href: string
    title?: string
}>;

export default function AddingLink( {href, title}: Props ) {
    return (
        <Link href={href} >
            <AddActionBlock title={title} />
        </Link>
    )
}