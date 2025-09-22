'use client';

import BoxXPadding from "@/views/common/ui/BoxXPadding";
import InputBox from "@/views/common/ui/InputBox";
import TextInput from "@/views/common/ui/TextInput";
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
        <BoxXPadding className="mt-8">
            <InputBox label="Назва" htmlFor="name">
                <TextInput
                    value={name}
                    onChange={handleInput}
                    placeholder="Введіть назву..."
                    name="name"
                    id="name"
                />
            </InputBox>
        </BoxXPadding>
    );
}