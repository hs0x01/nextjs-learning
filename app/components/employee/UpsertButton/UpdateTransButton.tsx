'use client'

import styles from "./UpdateTransButton.module.css"
import Button from "../../button/Button"

interface UpdateTransButtonProps {
}

export default function UpdateTransButton({}: UpdateTransButtonProps) {
    const handleClick = () => {
    }
    return(<Button onClick={handleClick} className={styles.styles}>編集</Button>)
}

