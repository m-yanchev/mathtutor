import Content from "@/editor/components/Content";
import Example from "@/essences/example/Example";

export default function Solution( {example}: { example: Example } ) {
    return (<>
        <h2 className="italic font-bold">Рішення:</h2>
        <Content content={example.solution} id={example.id} type={"solution"} />    
    </>);
}