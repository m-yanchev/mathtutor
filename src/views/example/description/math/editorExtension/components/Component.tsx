import { NodeViewProps, NodeViewWrapper } from '@tiptap/react'
import MathItem from "@/views/example/description/math/components/MathItem";

export default function Component(props: NodeViewProps) {

    const {formula} = props.node.attrs

    return (
        <NodeViewWrapper className="math" as="span">
            <MathItem formula={formula}/>
        </NodeViewWrapper>
    )
}