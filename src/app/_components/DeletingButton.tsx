'use client'

import { useRouter } from "next/navigation"

type Props = Readonly<{
    action: () => Promise<void>
}>

export function ActionDeletingButton({action}: Props) {
        
    const router = useRouter()

    const handleClick = async () => {
        if (!confirm('Ви впевнені, що хочете видалити це?')) return
        await action()
        router.refresh()
    }

    return (
        <button 
            onClick={() => {handleClick()}}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            type="button">
            Видалити
        </button>
    );
}

