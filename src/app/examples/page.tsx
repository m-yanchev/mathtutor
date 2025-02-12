import Link from "next/link";
import { getExamples } from "../lib/actions";
import MathP from "../ui/MathP";

export default async function Page() {
  const examples = await getExamples()

  return (<>
    <div className="m-5 flex gap-10">
      <div className="flex flex-col">
        <Link className="p-3 mb-2" href="/example/create">Додати</Link>
      </div>
      <div className="flex flex-col">
        {examples.map(example => 
          <MathP className="p-3 mb-5" key={example.id}>
            {example.description}
          </MathP>
        )}
      </div>
    </div>
  </>)
}
