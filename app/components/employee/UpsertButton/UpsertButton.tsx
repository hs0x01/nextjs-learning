'use client'

import { ReactNode } from "react"
import styles from "./UpsertButton.module.css"
import Button from "../../button/Button"

interface UpsertButtonProps {
}

export default function UpsertButton({}: UpsertButtonProps) {
    const handleClick = () => {

    }
    return(<Button onClick={handleClick}>登録</Button>)
}

