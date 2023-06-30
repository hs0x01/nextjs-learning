'use client'

import EmpList from "@/app/components/employee/EmpList/EmpList"
import DeptSelect from "@/app/components/department/DeptSelect"
import EmpNameInput from "@/app/components/employee/EmpNameInput/EmpNameInput"
import EmpNumberInput from "@/app/components/employee/EmpNumberInput/EmpNumberInput"
import styles from "./page.module.css"
import InsertTransButton from "@/app/components/employee/UpsertButton/InsertTransButton"
import UpdateTransButton from "@/app/components/employee/UpsertButton/UpdateTransButton"
import DeleteTransButton from "@/app/components/employee/DeleteButton/DeleteTransButton"

interface EmpListPageProps {
}

export default function EmpListPage({}: EmpListPageProps) {

    const handlerEmpNumberChange = (empNumber: string) => {
    }

    const handlerEmpNameChange = (empName: string) => {
    }

    const handlerDeptSelectChange = (selectedValue: string) => {
    }

    return (
        <>
            <EmpNumberInput onChange={handlerEmpNumberChange}></EmpNumberInput>
            <EmpNameInput onChange={handlerEmpNameChange}></EmpNameInput>
            <DeptSelect onChange={handlerDeptSelectChange} selected=""></DeptSelect>

            <EmpList></EmpList>

            <InsertTransButton></InsertTransButton>
            <UpdateTransButton></UpdateTransButton>
            <DeleteTransButton></DeleteTransButton>

        </>
    )
}
