export default class ImageClient {
    
    static async putImage( idExample: number, file: File ): Promise<void> {

        const formData = new FormData();
        formData.append("file", file);

        await fetch(`/api/example/${idExample}/files`, {
            method: "PUT",
            body: formData
        });
    }
}