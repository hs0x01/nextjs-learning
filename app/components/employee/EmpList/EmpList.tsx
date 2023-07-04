'use client'

import styles from "./EmpList.module.css"
import { useLayoutEffect, useState } from "react"

interface EmpListProps {
    onRowSelected?: (empNumber: string) => void
    onError?: (error: string) => void
    empNumber?: string
    empName?: string
    deptNumber?: string
}

export default function EmpList({onRowSelected, onError, empName, empNumber, deptNumber}: EmpListProps) {

    const [empList, setEmpList] = useState<any[]>([])

    const createEmpList = () => {
        return empList.map((data, idx) => {
            return (<tr key={data.empNumber} onClick={() => {if (onRowSelected) {onRowSelected(data.empNumber)}}} className={styles.row}>
                        <td>{idx + 1}</td>
                        <td>{data.empNumber}</td>
                        <td>{data.empName}</td>
                        <td>{data.deptName}</td>
                    </tr>)
        })
    }

    useLayoutEffect(() => {
        const searchEmpNumber: string = empNumber ? empNumber : ""
        const searchEmpName: string = empName ? empName : ""
        const searchDeptNumber: string = deptNumber ? deptNumber : ""
        fetch("/api/employees?" + new URLSearchParams({empNumber: searchEmpNumber, empName: searchEmpName, deptName: searchDeptNumber}))
            .then(async (response) => {
                const data = await response.json()
                if (response.ok) {
                    setEmpList(data)    
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
    }, [empNumber, empName, deptNumber, onError])

    return (
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>社員番号</th>
                    <th>社員名</th>
                    <th>部署</th>
                </tr>
            </thead>
            <tbody>
                {createEmpList()}
            </tbody>
        </table>
    )
}
