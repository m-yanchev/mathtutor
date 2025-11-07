import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export default function Component(props: NodeViewProps) {

    const {state} = props.node.attrs
    
    return (
        <NodeViewWrapper className="answer-options">
            <NodeViewContent className={ state || "col" }/>
        </NodeViewWrapper>
    )
}
