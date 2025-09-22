import Link from "next/link";
import EditIcon from "./EditIcon";

type Props = Readonly<{
    href: string
}>;

export default function EditingLink( {href}: Props ) {
    return (
        <Link href={href} className="flex items-center gap-[8px] py-[2px] px-[8px]">
            <EditIcon />
            <span className="text-orange text-[16px] leading-[20px]">
                Редагувати
            </span>
        </Link>
    )
}