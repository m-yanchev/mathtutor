import TestPage from "@/views/test/components/TestPage";

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page({ params }: Props) {
    
    const { id } = await params
    const testId = parseInt(id)

    return (
        <TestPage id={testId} />
    )
}