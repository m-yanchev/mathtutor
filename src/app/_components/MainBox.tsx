import Link from "next/link";
import type { UserRole } from "../_lib/User";

type MainBoxProps = Readonly<{
    children?: React.ReactNode;
    model: string;
    access?: UserRole;
}>;

type MainVerticalMenuProps = Readonly<{
    model: string;
    access?: UserRole;
}>;

type AddLinkProps = Readonly<{
    model: string;
}>;

type MenuLinkProps = Readonly<{
    href: string;
    children: React.ReactNode;
}>;

export default function MainBox({ children, model, access = "GUEST" }: MainBoxProps) {
    return (
        <div className="flex">
            <MainVerticalMenu model={model} access={access} />
            <div className="flex flex-col gap-5 p-5">
                {children}
            </div>
        </div>
    );
}

function MainVerticalMenu({ model, access = "GUEST" }: MainVerticalMenuProps) {
    return (
        <div className="flex flex-col gap-2 w-fit sticky top-5 left-0 h-screen p-5 bg-gray-50 border-r">
            <MainLink />
            {access === "ADMIN" && 
                <AddLink model={model} />
            }
        </div>
    )
}

function MainLink() {
    return (
        <MenuLink href="/">
            Головна
        </MenuLink>
    );
}

function AddLink({ model }: AddLinkProps) {
    return (
        <MenuLink href={`/${model}/create`}>
            Додати
        </MenuLink>
    );
}

function MenuLink({ href, children }: MenuLinkProps) {
    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
        >
            {children}
        </Link>
    );
}