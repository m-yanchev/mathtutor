'use server'

import { PrismaClient } from "@prisma/client"
import { redirect } from "next/navigation"

const prisma = new PrismaClient

export async function createExample(formData: FormData) {
    const description = formData.get('description')
    await prisma.examples.create({data: {description: String(description)}})
    redirect('/examples')   
}

export async function getExamples() {
    return await prisma.examples.findMany()
}