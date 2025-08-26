"use client"

import { createContext, ReactNode, useContext } from "react"

type Props = Readonly<{
    children: ReactNode
    value: ImageProviderValue
}>

export interface ImageProviderValue {
    onAdd: ( file: File ) => void
}

const ImageProviderContext = createContext<ImageProviderValue | null>(null)

export default function ImageProvider( {children, value}: Props ) {
    return (
        <ImageProviderContext.Provider value={value}>
            {children}
        </ImageProviderContext.Provider>
    )
}

export function useImageProvider() {
    const context = useContext(ImageProviderContext)
    if (!context) {
        throw new Error("useImageProvider must be used within an ImageProvider")
    }
    return context
}