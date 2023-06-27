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
                where
            })
        return NextResponse.json(employees)
    } catch(e) {
        return NextResponse.json({"message": "システムエラーです。"}, {status: 500})
    }
}

export async function POST(request: NextRequest) {
    try {
        const content = await request.json()
        if (!content.empNumber) {
            return NextResponse.json({"message": "empNumberがありません。"}, {status: 400})
        }
        if (!content.empName) {
            return NextResponse.json({"message": "empNameがありません。"}, {status: 400})
        }
        if (!content.deptNumber) {
            return NextResponse.json({"message": "deptNumberがありません。"}, {status: 400})
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
        return NextResponse.json({"message": "システムエラーです。"}, {status: 500})
    }
}
