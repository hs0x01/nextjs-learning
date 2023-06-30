'use client'

import styles from "./DeleteTransButton.module.css"
import Button from "../../button/Button"

interface DeleteTransButtonProps {
}

export default function DeleteTransButton({}: DeleteTransButtonProps) {
    const handleClick = () => {
    }
    return(<Button onClick={handleClick} className={styles.styles}>削除</Button>)
}

