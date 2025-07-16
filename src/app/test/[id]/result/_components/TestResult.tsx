"use client";

import { redirect } from "next/navigation";
import ExampleAnswer from "@/app/_components/ExampleAnswer";
import ExampleBox from "@/app/_components/ExampleBox";
import ExampleDesc from "@/app/_components/ExampleDesc";
import type { TestResult } from "@/app/_lib/TestResult";

export default function TestResult({result}: {result: TestResult}) {
    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="mb-8">Результати тесту {result.test.name}</h1>
            {result.exampleResults.map(({ testExample, answer, id }) => (
                <ExampleBox key={id}>
                    <h3 className="mb-4">{`№ ${testExample.number + 1}`}</h3>
                    <ExampleDesc className="mb-4" id={testExample.example.id} description={testExample.example.description} />
                    <ExampleAnswer value={testExample.example.answer || null} />
                    {answer === testExample.example.answer ? (
                        <p className="text-green-600">Ваша відповідь вірна!</p>
                    ) : (
                        <p className="text-red-600">Ваша відповідь: {answer || "не вказано"}</p>
                    )}
                </ExampleBox>
            ))}
            <button 
                onClick={() => redirect('/tests')}
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Повернутися до тестів
            </button>
        </div>
    )
}