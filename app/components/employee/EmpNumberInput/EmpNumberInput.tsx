'use client'

import styles from "./EmpNumberInput.module.css"
import { ChangeEvent, useState } from "react"
import TextInput from "../../textinput/TextInput"

interface EmpNumberInputProps {
    onChange: (text: string) => void
    required?: boolean
    readonly?: boolean
    value?: string
}

export default function EmpNumberInput({ onChange, required, readonly, value = "" }: EmpNumberInputProps) {

    const [text, setText] = useState(value)
    const [errMsg, setErrMsg] = useState("")

    const handleChangeText = (text: string) => {
        setText(text)
        onChange(text)
    }

    const handleRequiredError = () => {
        setErrMsg("社員番号は必須です")
    }

    const handleLengthError = () => {
        setErrMsg("社員番号は5文字以内で入力してください")
    }

    const handleChartypeError = () => {
        setErrMsg("社員番号は数字で入力してください")
    }

    const handleSuccess = () => {
        setErrMsg("")
    }

    return (
        <div>
            <span>社員番号</span>
            <span><TextInput placeholder="社員番号を入力してください"
                required={required}
                maxlength={5}
                chartype={/^[0-9]+$/}
                onChange={handleChangeText}
                onRequiredError={handleRequiredError}
                onLengthError={handleLengthError}
                onChartypeError={handleChartypeError}
                onSuccess={handleSuccess}
                readonly={readonly}
                value={text}></TextInput></span>
            {
                errMsg ? <><br /><span className={styles.error}>{errMsg}</span></> : ""
            }
        </div>
    )
}
