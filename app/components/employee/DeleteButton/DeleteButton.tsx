'use client'

import styles from "./DeleteButton.module.css"
import Button from "../../button/Button"

interface DeleteButtonProps {
    empNumber: string
    onSuccess?: () => void
    onError?: (error: string) => void
}

export default function DeleteButton({empNumber, onSuccess, onError}: DeleteButtonProps) {
    const handleClick = () => {
        fetch(`/api/employees/${empNumber}`, {
            method: "DELETE"
        })
        .then(async (response) => {
            const data = await response.json()
            if (response.ok) {
                if (onSuccess) {
                    onSuccess()
                }
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
    }
    return(<Button onClick={handleClick} className={styles.styles}>削除</Button>)
}
