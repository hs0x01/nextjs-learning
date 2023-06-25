'use client'

import styles from "./Select.module.css"
import { ChangeEvent, useState } from "react"

interface SelectProps {
    children: Array<{ value: string, label: string }>
    selected: string
    onChange: (selectedValue: string) => void
}

export default function Select({ children, selected, onChange }: SelectProps) {

    const [selectedValue, setSelectedValue] = useState("")

    const createOptions = () => {
        return children.map((data) => {
            // TODO 以下警告がでる。 
            // app-index.js:32 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
            // selectのvalueで対応すると、無限ループになる。どう対応すればよいか検討中
            return <option key={data.value} value={data.value} selected={data.value == selected}>{data.label}</option>
        })
    }

    const handleChangeText = (e: ChangeEvent<HTMLSelectElement>) => {
        const value: string = e.target.value
        setSelectedValue(value)
        onChange(value)
    }

    return (
        <select className={styles.styles} onChange={handleChangeText}>{createOptions()}</select>
    )
}

