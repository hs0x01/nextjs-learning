'use client'

import styles from "./EmpList.module.css"
import { useEffect, useState } from "react"

interface EmpListProps {
    onRowSelected?: (empNumber: string) => void
}

export default function EmpList({onRowSelected}: EmpListProps) {

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

    useEffect(() => {
        fetch("/api/employees")
            .then(async (response) => {
                const data = await response.json()
                setEmpList(data)
            })
            .catch((response) => {
                console.log("Error!")
                console.log(response)
            })
    })

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
