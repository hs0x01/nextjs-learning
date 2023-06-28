import { NextRequest, NextResponse } from "next/server"
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams
        const empNumber = searchParams.get("empNumber")
        const empName = searchParams.get("empName")
        const deptNumber = searchParams.get("deptNumber")

        const where: Prisma.employeesWhereInput = {}
        if (empNumber) {
            where.empNumber = {contains: empNumber}
        }
        if (empName) {
            where.empName = {contains: empName}
        }
        if (deptNumber) {
            where.deptNumber = {contains: deptNumber}
        }
        
        const employees = await prisma.employees.findMany(
            {
                where,
                orderBy: {
                    empNumber: "asc"
                }
            })
        return NextResponse.json(employees)
    } catch(e) {
        return NextResponse.json({"error": "system_error"}, {status: 500})
    }
}

export async function POST(request: NextRequest) {
    try {
        const content = await request.json()
        if (!content.empNumber) {
            return NextResponse.json({"error": "empNumber_empty"}, {status: 400})
        }
        if (!content.empName) {
            return NextResponse.json({"error": "empName_empty"}, {status: 400})
        }
        if (!content.deptNumber) {
            return NextResponse.json({"error": "deptNumber_empty"}, {status: 400})
        }
        
        const empNumber: string = content.empNumber
        const employee = await prisma.employees.findUnique({
            where: {
                empNumber
            }
        })
        if (employee) {
            return NextResponse.json({"error": "empNumber_duplication"}, {status: 400})
        }

        await prisma.employees.create({
            data: {
                empNumber: content.empNumber,
                empName: content.empName,
                deptNumber: content.deptNumber
            }
        })
        return NextResponse.json({})
    } catch(e) {
        return NextResponse.json({"error": "system_error"}, {status: 500})
    }
}
