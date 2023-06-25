'use client'

import styles from "./DeptSelect.module.css"
import { ChangeEvent, useState } from "react"
import Select from "../select/Select"

interface DeptSelectProps {
    selected: string
    onChange: (selectedValue: string) => void
}

export default function DeptSelect({ selected, onChange }: DeptSelectProps) {

    const [selectedValue, setSelectedValue] = useState("")

    const handleChange = (selectedValue: string) => {
        setSelectedValue(selectedValue)
        onChange(selected)
    }

    return (
        <Select onChange={handleChange} selected={selected}>
            {
                [
                    {value: "1", label: "開発部"},
                    {value: "2", label: "営業部"},
                    {value: "3", label: "総務部"}
                ]
            }
        </Select>
    )
}
