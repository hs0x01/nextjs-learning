'use client'

import { ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
    children: ReactNode
    onClick: () => void
}

export default function Button({children, onClick}: ButtonProps) {
    return(<button className={styles.styles} onClick={onClick}>{children}</button>)
}
