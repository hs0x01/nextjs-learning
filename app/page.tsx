'use client'

import Button from "./components/button/Button"
import Select from "./components/select/Select"
import TextInput from "./components/textinput/TextInput"
import { useState } from "react"

export default function Home() {

  const [text, setText] = useState("")

  const handleClick = () => {
    console.log(text)
  }

  const handleChange = (text: string) => {
    setText(text)
  }

  return (
    <>
      <TextInput onChange={handleChange} placeholder="hoge"></TextInput>
      <br />
      <Button onClick={handleClick}>test</Button>
      <br />
      <Select selected={"b"} onChange={(selectedValue) => {console.log(selectedValue)}}>{[{value: "a", label: "あ"}, {value: "b", label: "い"}]}</Select>
    </>
  )
}
