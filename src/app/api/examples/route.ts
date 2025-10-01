import DataSource from "@/essences/example/DataSource";

export async function GET() {
    const examples = await DataSource.loadDataList();
    return Response.json({ examples });
}