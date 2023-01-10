import React from 'react'

import { TableCell, TableRow, TableHead } from '@mui/material'

const EmployeesHead = () => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell align="left">ID</TableCell>
          <TableCell align="center">ФИО</TableCell>
          <TableCell align="right">Дата Рождения</TableCell>
        </TableRow>
      </TableHead>
    </>
  )
}

export { EmployeesHead }
