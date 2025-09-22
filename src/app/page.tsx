import type { Metadata } from 'next'
import TestsPage from "@/views/test/components/CardsPage";

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://mathteacher.education/tests',
    },
}

export default async function Page() {

    return (<>
        <TestsPage />
    </>)
}