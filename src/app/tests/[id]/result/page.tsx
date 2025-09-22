import ResultsPage from "@/views/test/result/components/Page"

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