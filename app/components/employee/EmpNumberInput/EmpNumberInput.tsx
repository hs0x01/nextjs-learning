'use client'

import styles from "./EmpNumberInput.module.css"
import { ChangeEvent, useState } from "react"
import TextInput from "../../textinput/TextInput"

interface EmpNumberInputProps {
    onChange: (text: string) => void
}

export default function TextInput({onChange}: EmpNumberInputProps) {

    const [text, setText] = useState("")

    const handleChangeText = (text: string) => {
        setText(text)
        onChange(text)
    }

    return(<TextInput onChange={handleChangeText}></TextInput>)
}
