'use client'

import styles from "./EmpNameInput.module.css"
import { ChangeEvent, useState } from "react"
import TextInput from "../../textinput/TextInput"

interface EmpNameInputProps {
    onChange: (text: string) => void
    required?: boolean
    readonly?: boolean
}

export default function EmpNameInput({ onChange, required }: EmpNameInputProps) {

    const [text, setText] = useState("")
    const [errMsg, setErrMsg] = useState("")

    const handleChangeText = (text: string) => {
        setText(text)
        onChange(text)
    }

    const handleRequiredError = () => {
        setErrMsg("社員名は必須です")
    }

    const handleLengthError = () => {
        setErrMsg("社員名は30文字以内で入力してください")
    }

    const handleSuccess = () => {
        setErrMsg("")
    }

    return (
        <div>
            <span>社員名</span>
            <span><TextInput placeholder="社員名を入力してください"
                required={required}
                maxlength={30}
                onChange={handleChangeText}
                onRequiredError={handleRequiredError}
                onLengthError={handleLengthError}
                onSuccess={handleSuccess}
                readonly={false}></TextInput></span>
            {
                errMsg ? <><br /><span className={styles.error}>{errMsg}</span></> : ""
            }
        </div>
    )
}
