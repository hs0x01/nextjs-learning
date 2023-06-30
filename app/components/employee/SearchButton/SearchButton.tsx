'use client'

import styles from "./SearchButton.module.css"
import Button from "../../button/Button"

interface SearchButtonProps {
    onClick: () => void
}

export default function SearchButton({onClick}: SearchButtonProps) {
    return(<Button onClick={onClick} className={styles.styles}>検索</Button>)
}
