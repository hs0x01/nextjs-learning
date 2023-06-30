'use client'

import { ReactNode } from "react"
import styles from "./Button.module.css"

interface ButtonProps {
    children: ReactNode
    onClick: () => void
    className?: string
}

export default function Button({children, onClick, className}: ButtonProps) {
    const cls = className ? className : styles.styles
    return(<button className={cls} onClick={onClick}>{children}</button>)
}
