import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../store'
import { employeesSelectors, getEmployeesTC } from './employes-slice'
import { EmployeesHead } from './EmployeesHead'
import { Paper, Table, TableBody, TableContainer } from '@mui/material'
import { EmployeesItem } from './EmployeesItem'

const EmployeesList = () => {
  const dispatch = useAppDispatch()
  const employees = useAppSelector(employeesSelectors)

  const employeesItem = employees.map((employees) => {
    return <EmployeesItem key={employees.id} {...employees} />
  })

  useEffect(() => {
    dispatch(getEmployeesTC())
  }, [])

  return (
    <TableContainer
      component={Paper}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Table sx={{ maxWidth: 800 }} size="small" aria-label="employees table">
        <EmployeesHead />
        <TableBody>{employeesItem}</TableBody>
      </Table>
    </TableContainer>
  )
}

export { EmployeesList }
