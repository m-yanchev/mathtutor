import MathItem from "@/views/example/description/math/components/MathItem";

type Props = Readonly<{
    children: string;
}>;

export default function MathInExample( {children}: Props ) {
    return (
        <MathItem className="" formula={children} />
    )
}