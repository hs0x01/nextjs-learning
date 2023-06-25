'use client'

import styles from "./TextInput.module.css"
import { ChangeEvent, useState } from "react"

interface TextInputProps {
    placeholder?: string
    onChange: (text: string) => void
    required?: boolean
    readonly?: boolean
    maxlength: number
    minlength?: number
    chartype?: RegExp
    onRequiredError?: () => void
    onLengthError?: (text: string) => void
    onChartypeError?: (text: string) => void
}

export default function TextInput({placeholder = "", onChange, required = false, readonly = false, maxlength,
                            minlength = 0, chartype, onRequiredError, onLengthError, onChartypeError}: TextInputProps) {

    const [text, setText] = useState("")
    const [hasError, setError] = useState(false)

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const text: string = e.target.value
        setText(text)
        onChange(text)
    }

    const handleBlur = () => {
        if (!validateRequired(text)) {
            fireRequiredError()
        } else if (!validateLength(text)) {
            fireLengthError()
        } else if (!validateChartype(text)) {
            fireChartypeError()
        } else {
            setError(false)
        }
    }

    const validateRequired = (text: string) => {
        if (!required) {
            return true
        }
        if (typeof text === "undefined" || text === null || text.length === 0) {
            return false
        }
        return true
    }

    const validateLength = (text: string) => {
        const textLen = text.length
        if (textLen < minlength || textLen > maxlength) {
            return false
        }
        return true
    }

    const validateChartype = (text: string) => {

        if (typeof chartype === "undefined") {
            return true
        }

        if (!chartype.test(text)) {
            return false
        }

        return true

    }

    const fireRequiredError = () => {
        setError(true)
        if (onRequiredError) {
            onRequiredError()
        }
    }

    const fireLengthError = () => {
        setError(true)
        if (onLengthError) {
            onLengthError(text)
        }
    }

    const fireChartypeError = () => {
        setError(true)
        if (onChartypeError) {
            onChartypeError(text)
        }
    }

    return(<input type="text" value={text} className={`${styles.styles} ${hasError ? styles.error : ""}`} onChange={handleChangeText} onBlur={handleBlur} placeholder={placeholder} ></input>)
}
