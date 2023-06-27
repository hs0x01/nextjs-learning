import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const departments = await prisma.departments.findMany()
        return NextResponse.json(departments)
    } catch(e) {
        return NextResponse.json({"message": "システムエラーです。"}, {status: 500})
    }
}
