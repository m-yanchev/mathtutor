import { notFound } from "next/navigation"
import { getTestResult } from "@/app/_lib/actions"
import TestResult from "./_components/TestResult"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {
    
    const { id } = await params
    const testId = parseInt(id)
    const result = await getTestResult(testId)
    if (!result) notFound()

    return (
        <TestResult result={result} />
    ) 
}