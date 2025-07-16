import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-10 flex flex-col items-center gap-5">
      <Link href="/examples" className="">Завдання</Link>
      <Link href="/tests" className="">Тести</Link>
    </div>
  )
}
