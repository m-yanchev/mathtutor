import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export default function Component(props: NodeViewProps) {

    const {index} = props.node.attrs

    return (
        <NodeViewWrapper className="flex">
            <span className="answer-option-index">{index}</span>
            <NodeViewContent/>
        </NodeViewWrapper>
    )
}