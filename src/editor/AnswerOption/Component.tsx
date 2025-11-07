import { NodeViewContent, NodeViewProps, NodeViewWrapper } from "@tiptap/react";

export default function Component(props: NodeViewProps) {

    const {index} = props.node.attrs

    return (
        <NodeViewWrapper className="answer-option" >
            <div className="index" contentEditable={false}>
                { index.toLowerCase() + "." }
            </div>
            <NodeViewContent />
        </NodeViewWrapper>
    )
}