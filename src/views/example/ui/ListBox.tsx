import BoxXPadding from "@/views/common/ui/BoxXPadding";
import Box from "./Box";

type Props = Readonly<{
    children: React.ReactNode;
}>;

export function ListBox( { children }: Props ) {
    return (
        <BoxXPadding className="my-[24px]">
            <ul className="flex flex-col gap-[24px]">
                {children}
            </ul>
        </BoxXPadding>
    )
}

export function ListItemBox( { children }: Props ) {
    return (
        <li className="list-none">
            <Box>
                {children}
            </Box>
        </li>
    )
}