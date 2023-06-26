'use client'

import Button from "./components/button/Button"
import DeptSelect from "./components/department/DeptSelect"
import EmpList from "./components/employee/EmpList/EmpList"
import EmpNameInput from "./components/employee/EmpNameInput/EmpNameInput"
import EmpNumberInput from "./components/employee/EmpNumberInput/EmpNumberInput"
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

  const handleRequiredError = () => {
    console.log('required error!')
  }

  const handleLengthError = () => {
    console.log('length error!')
  }

  const handleChartypeError = () => {
    console.log('chartype error!')
  }

  const handleRowSelected = (empNumber: string) => {
    console.log(empNumber)
  }

  return (
    <>
      {
        //<TextInput onChange={handleChange} placeholder="hoge" maxlength={5} required={true} chartype={/^[0-9]+$/} onRequiredError={handleRequiredError} onLengthError={handleLengthError} onChartypeError={handleChartypeError}></TextInput>
        //<br />
        //<Button onClick={handleClick}>test</Button>
        //<br />
        //<Select selected={"b"} onChange={(selectedValue) => {console.log(selectedValue)}}>{[{value: "a", label: "あ"}, {value: "b", label: "い"}]}</Select>
        //<EmpNumberInput onChange={handleChange}></EmpNumberInput>
        //<EmpNameInput onChange={handleChange}></EmpNameInput>
        //<DeptSelect onChange={handleDeptSelectChange} selected=""></DeptSelect>
      }

      <EmpList onRowSelected={handleRowSelected}>
      {
        [
          {
            empNumber: '00001', empName: 'テストｑ太郎', deptName: '開発部'
          },
          {
            empNumber: '00002', empName: 'テストｇ花子', deptName: '営業部'
          }
        ]        
      }
      </EmpList>

      
      
    </>
  )
}
