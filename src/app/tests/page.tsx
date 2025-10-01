import type { Metadata } from "next";
import TestsPage from "@/views/test/components/CardsPage";

export const metadata: Metadata = {
    title: "Тести з математики",
    description: "Сторінка з каталогом пробних тестів для підготовки до НМТ з математики",
    alternates: {
        canonical: 'https://mathteacher.education/tests',
    },
};

export default async function Page() {

    return (
        <TestsPage />
    )
}