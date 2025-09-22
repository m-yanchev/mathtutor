import type { ExampleFind } from "@/essences/example/interfaces"
import type { TestInput as ITestInput } from "./interfaces"

export default class TestInput implements ITestInput {

    public name: string = ""
    public examples: ExampleFind[] = []

    public static create( formData: FormData ) : TestInput {
        const instance = new TestInput()
        instance.name = formData.get("name") as string
        const fdExamples = String( formData.get('examples') )
        instance.examples = fdExamples !== "" ? fdExamples.split(',').map(id => ({ id: Number(id) })) : []
        console.log(instance)
        return instance
    }
}
