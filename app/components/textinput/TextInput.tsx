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
    onSuccess?: (text: string) => void
    value?: string
}

export default function TextInput({ placeholder = "", onChange, required = false, readonly = false, maxlength,
    minlength = 0, chartype, onRequiredError, onLengthError, onChartypeError,
    onSuccess, value = "" }: TextInputProps) {

    const [text, setText] = useState(value)
    const [hasError, setError] = useState(false)

    // TODO
    setTimeout(() => {
        setText(value)
    }, 10)

    const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        const text: string = e.target.value
        setText(text)
        onChange(text)
    }

    const handleBlur = () => {
        if (!required && isEmpty(text)) {
            fireSuccess()
            return
        }
        if (!validateRequired(text)) {
            fireRequiredError()
        } else if (!validateLength(text)) {
            fireLengthError()
        } else if (!validateChartype(text)) {
            fireChartypeError()
        } else {
            fireSuccess()
        }
    }

    const isEmpty = (text: string) => {
        return (typeof text === "undefined" || text === null || text.length === 0)
    }

    const validateRequired = (text: string) => {
        if (!required) {
            return true
        }
        if (isEmpty(text)) {
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

    const fireSuccess = () => {
        setError(false)
        if (onSuccess) {
            onSuccess(text)
        }
    }

    return (
        <input type="text" value={text} className={`${styles.styles} ${hasError ? styles.error : ""}`}
            onChange={handleChangeText} onBlur={handleBlur} placeholder={placeholder}
            readOnly={readonly ? true : false}></input>)
}
