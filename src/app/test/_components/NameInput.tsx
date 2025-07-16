'use client';

import { useState } from "react";

type Props = {
    value?: string;
};

export default function NameInput({ value }: Props) {
    const [name, setName] = useState<string>(value || "");
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setName(newValue);
    };
    return (
        <div className="flex flex-col gap-2 mb-12">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Назва</label>
            <input
                type="text"
                id="name"
                name="name"
                className="block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Введіть назву..."
                value={name}
                onChange={handleInput}
            />
        </div>
    );
}