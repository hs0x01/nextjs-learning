'use client'

import styles from "./InsertTransButton.module.css"
import Button from "../../button/Button"

interface InsertTransButtonProps {
}

export default function InsertTransButton({}: InsertTransButtonProps) {
    const handleClick = () => {
    }
    return(<Button onClick={handleClick} className={styles.styles}>登録</Button>)
}

