import ViewPage from "@/views/example/components/ViewPage"

type Props = Readonly<{
    params: Promise<{ id: string }>
}>

export default async function Page( { params }: Props ) {

    const { id } = await params
    const exampleId = parseInt(id)

    return (
        <ViewPage id={exampleId} />
    )
}