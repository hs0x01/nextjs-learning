'use client'

import styles from "./DeptSelect.module.css"
import { useEffect, useState } from "react"
import Select from "../select/Select"

interface DeptSelectProps {
    selected: string
    onChange: (selectedValue: string) => void
    onError?: (error: string) => void
}

export default function DeptSelect({selected, onChange, onError}: DeptSelectProps) {

    const [selectedValue, setSelectedValue] = useState("")
    const [deptList, setDeptList] = useState<any[]>([])

    const handleChange = (selectedValue: string) => {
        setSelectedValue(selectedValue)
        onChange(selected)
    }

    const createDeptList = () => {
        return deptList.map((data, idx) => {
            return (
                {value: data.deptNumber, label: data.deptName}
            )
        })
    }

    useEffect(() => {
        fetch("/api/departments")
            .then(async (response) => {
                const data = await response.json()
                if (response.ok) {
                    setDeptList(data)    
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
    }, [onError])

    return (
        <div>
            <span>部署名</span>
            <span><Select onChange={handleChange} selected={selected}>{createDeptList()}</Select></span>
        </div>
    )
}
