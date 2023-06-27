import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    const employees = await prisma.employees.findMany()
    return NextResponse.json(employees)
}

export async function POST(request: NextRequest) {
    const content = await request.json()
    await prisma.employees.create({
        data: {
            empNumber: content.empNumber,
            empName: content.empName,
            deptNumber: content.deptNumber
        }
    })
}
