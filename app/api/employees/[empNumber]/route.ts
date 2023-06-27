import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { empNumber: string } }) {
    const empNumber = params.empNumber;
    const employee = await prisma.employees.findUnique({
        where: {
            empNumber,
        }
    })
    return NextResponse.json(employee)
}
