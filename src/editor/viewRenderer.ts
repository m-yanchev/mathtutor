"use client"
import { ReactNodeViewProps, ReactNodeViewRenderer } from "@tiptap/react";

export default function viewRenderer(component: React.ComponentType<ReactNodeViewProps<HTMLElement>>) {
    return ReactNodeViewRenderer(component)
}