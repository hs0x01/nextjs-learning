'use client'

import DeptSelect from "@/app/components/department/DeptSelect"
import EmpNameInput from "@/app/components/employee/EmpNameInput/EmpNameInput"
import EmpNumberInput from "@/app/components/employee/EmpNumberInput/EmpNumberInput"
import UpsertButton from "@/app/components/employee/UpsertButton/UpsertButton"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

interface EmpPatternPageProps {
    onError?: (error: string) => void
}

export default function EmpPatternPage({onError}: EmpPatternPageProps) {

    const {pattern} = useParams()
    let empNumberParam = useSearchParams().get("empNumber")
    if (!empNumberParam || pattern === "insert") {
        empNumberParam = ""
    }

    

    function handleEmpNumberChange(text: string): void {
        throw new Error("Function not implemented.")
    }

    function handleEmpNameChange(text: string): void {
        throw new Error("Function not implemented.")
    }

    function handleDeptSelectChange(selectedValue: string): void {
        throw new Error("Function not implemented.")
    }

    const [empNumber, setEmpNumber] = useState(empNumberParam)
    const [empName, setEmpName] = useState("")
    const [deptNumber, setDeptNumber] = useState("")

    useEffect(() => {
        
        if (pattern === "insert") {
            return
        }

        fetch(`/api/employees/${empNumberParam}`)
            .then(async (response) => {
                const data = await response.json()
                if (response.ok) {
                    setEmpName(data.empName)
                    setDeptNumber(data.deptNumber)
                } else {
                    if (onError) {
                        onError(data.error)
                    }
                }
            })
            .catch(async (response) => {
                console.error(response)
                if (onError) {
                    onError("system_error")
                }
            })
    }, [pattern, empNumberParam, onError])

    return (
        <>
            <EmpNumberInput onChange={handleEmpNumberChange} readonly={pattern === "insert" ? false : true}
                value={pattern === "insert" ? "" : empNumber}></EmpNumberInput>
            <EmpNameInput onChange={handleEmpNameChange} required={true} value={empName}></EmpNameInput>
            <DeptSelect onChange={handleDeptSelectChange} selected={deptNumber}></DeptSelect>
        </>
    )
}
