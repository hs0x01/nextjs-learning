'use client'

import Button from "../../button/Button"

interface UpsertButtonProps {
    isUpdate?: boolean
    empNumber: string
    empName: string
    deptNumber: string
    onSuccess?: () => void
    onError?: (error: string) => void
}

export default function UpsertButton({isUpdate, empNumber, empName, deptNumber, onSuccess, onError}: UpsertButtonProps) {
    const handleClick = () => {
        const url = isUpdate ? `/api/employees/${empNumber}` : "/api/employees" 
        fetch(url, {
            method: isUpdate ? "PUT" : "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "empNumber": empNumber,
                "empName": empName,
                "deptNumber": deptNumber
            })
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
    return(<Button onClick={handleClick}>登録</Button>)
}

