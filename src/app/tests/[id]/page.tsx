import type { Metadata } from "next";
import TestPage from "@/views/test/components/TestPage";

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export const metadata: Metadata = {
    title: "Тест з математики",
    description: "Сторінка з тестом з математики для підготовки до НМТ",
};

export default async function Page({ params }: Props) {
    
    const { id } = await params
    const testId = parseInt(id)

    return (
        <TestPage id={testId} />
    )
}