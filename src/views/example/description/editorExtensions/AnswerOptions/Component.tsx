import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export default function Component(props: NodeViewProps) {

    const {state} = props.node.attrs
    
    return (
        <NodeViewWrapper>
            <NodeViewContent className={state}/>
        </NodeViewWrapper>
    )
}
