import { createExample } from "@/app/lib/actions";
import DescriptionInput from "./_ui/DescriptionInput";

export default function Page() {

    return (
        <form className="flex flex-col items-center p-10" action={createExample}>
            <DescriptionInput/>
            <button className="mt-10 p-2 border-solid border-2 bg-white" type="submit">Зберегти завдання</button>
        </form>
    )
}