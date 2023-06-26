'use client'

import styles from "./EmpList.module.css"
import { useState } from "react"

interface EmpListProps {
    children: Array<{empNumber: string, empName: string, deptName: string}>
    onRowSelected?: (empNumber: string) => void
}

export default function EmpList({ onRowSelected, children }: EmpListProps) {

    const createEmpList = () => {

        return children.map((data, idx) => {
            return (<tr key={data.empNumber} onClick={() => {if (onRowSelected) {onRowSelected(data.empNumber)}}} className={styles.row}>
                        <td>{idx + 1}</td>
                        <td>{data.empNumber}</td>
                        <td>{data.empName}</td>
                        <td>{data.deptName}</td>
                    </tr>)
        })

    }

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
