import ResultsPage from "@/essences/testsPage/testPage/resultsPage/components/ResultsPage"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {
    
    const { id } = await params
    const testId = parseInt(id)

    return (
        <ResultsPage id={testId} />
    ) 
}