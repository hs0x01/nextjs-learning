import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const departments = await prisma.departments.findMany()
    return NextResponse.json(departments)
}
