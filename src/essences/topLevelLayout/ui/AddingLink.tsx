import Link from "next/link";

type Props = Readonly<{
    href: string
}>;

export default function AddingLink( {href}: Props ) {
    return (
        <Link href={href} className="fixed top-96 z-10 left-14 rounded-[16px] py-[12px] px-[18px] bg-orange shadow-drop text-gray-light">
            Додати
        </Link>
    )
}