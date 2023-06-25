'use client'

import styles from "./TextInput.module.css"
import { ChangeEvent, useState } from "react"

interface TextInputProps {
    placeholder?: string
    onChange: (text: string) => void
}

export default function TextInput({placeholder = "", onChange}: TextInputProps) {

    const [text, setText] = useState("")

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const text: string = e.target.value
        setText(text)
        onChange(text)
    }

    return(<input type="text" value={text} className={styles.styles} onChange={handleChangeText} placeholder={placeholder}></input>)
}
