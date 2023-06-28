import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest, { params }: { params: { empNumber: string } }) {
    try {
        const empNumber = params.empNumber
        const employee = await prisma.employees.findUnique({
            where: {
                empNumber
            }
        })
        return NextResponse.json(employee)
    } catch(e) {
        return NextResponse.json({"error": "system_error"}, {status: 500})
    }
}

export async function PUT(request: NextRequest, { params }: { params: { empNumber: string } }) {
    try {
        const empNumber = params.empNumber
        const content = await request.json()
        
        if (!content.empName) {
            return NextResponse.json({"error": "empName_empty"}, {status: 400})
        }
        if (!content.deptNumber) {
            return NextResponse.json({"error": "deptNumber_empty"}, {status: 400})
        }

        const employee = await prisma.employees.findUnique({
            where: {
                empNumber
            }
        })
        if (!employee) {
            return NextResponse.json({"error": "employee_not_fount"}, {status: 404})
        }

        await prisma.employees.update({
            where: {
                empNumber: empNumber
            },
            data: {
                empName: content.empName,
                deptNumber: content.deptNumber
            }
        })

        return NextResponse.json({})
    } catch(e) {
        return NextResponse.json({"error": "system_error"}, {status: 500})
    }
}

export async function DELETE(request: NextRequest, { params }: { params: { empNumber: string } }) {
    try {
        const empNumber = params.empNumber
        const employee = await prisma.employees.findUnique({
            where: {
                empNumber
            }
        })

        if (!employee) {
            return NextResponse.json({"error": "employee_not_fount"}, {status: 404})
        }

        await prisma.employees.delete({
            where: {
                empNumber: empNumber
            }
        })

        return NextResponse.json({})

    } catch(e) {
        return NextResponse.json({"error": "system_error"}, {status: 500})
    }
}
