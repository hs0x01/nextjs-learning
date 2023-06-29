'use client'

import Button from "./components/button/Button"
import DeptSelect from "./components/department/DeptSelect"
import EmpList from "./components/employee/EmpList/EmpList"
import EmpNameInput from "./components/employee/EmpNameInput/EmpNameInput"
import EmpNumberInput from "./components/employee/EmpNumberInput/EmpNumberInput"
import UpsertButton from "./components/employee/UpsertButton/UpsertButton"
import Select from "./components/select/Select"
import TextInput from "./components/textinput/TextInput"
import { useState } from "react"

export default function Home() {

  const [empNumber, setEmpNumber] = useState("")
  const [empName, setEmpName] = useState("")
  const [deptNumber, setDeptNumber] = useState("")

  const handleEmpNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmpNumber(e.target.value)
  }
  const handleEmpNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmpName(e.target.value)
  }
  const handleDeptNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeptNumber(e.target.value)
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
        //<EmpList onRowSelected={handleRowSelected} empName={text}></EmpList>
      }

      <input type="text" onChange={handleEmpNumberChange}></input>
      <input type="text" onChange={handleEmpNameChange}></input>
      <input type="text" onChange={handleDeptNumberChange}></input>
      
      <UpsertButton empNumber={empNumber} empName={empName} deptNumber={deptNumber} isUpdate={true}></UpsertButton>
      
      
    </>
  )
}
