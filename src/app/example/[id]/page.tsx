import type { Metadata } from "next";
import ViewPage from "@/views/example/components/ViewPage"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export const metadata: Metadata = {
    title: "Приклад з математики",
    description: "Сторінка з прикладом завдання для підготовки до НМТ з математики і його розв'язком",
};

export default async function Page( { params }: Props ) {

    const { id } = await params
    const exampleId = parseInt(id)

    return (
        <ViewPage id={exampleId} />
    )
}