import Button from "@/views/common/components/Button";

export default function SolutionButton({ href }: { href: string }) {
    return (
        <Button href={href} variant="small" >Рішення</Button>
    );
}