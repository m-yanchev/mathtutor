"use server"

import { prisma } from "@/dataSources/prisma"
import { LatexListFindingResult } from "./interfaces";

export async function findFormulasInStorageByLatex( latex: string ): Promise<LatexListFindingResult> {
    const chars = Array.from(latex.replace(/\s/g, '')).map(char =>
        char === '\\' ? '\\\\' : char
    );
    console.log(chars)
    const where = {
        AND: chars.map(char => ({
          latex: { contains: char }
        }))
    };
    const latexList = await prisma.formula.findMany({ where });
    console.log(latexList)
    return { latexList }
}
