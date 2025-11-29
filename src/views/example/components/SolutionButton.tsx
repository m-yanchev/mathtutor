import Example from "@/essences/example/Example";
import Button from "@/views/common/components/Button";

export default function SolutionButton({ example }: { example: Example }) {
    return (
        <Button href={example.href} variant="small" >Рішення</Button>
    );
}