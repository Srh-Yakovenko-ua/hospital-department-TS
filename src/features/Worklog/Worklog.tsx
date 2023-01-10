import React from 'react'
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { WorklogEmployeeTable } from './WorklogEmployeeTable'
import { useWorklog } from './hooks/useWoklog'

const Worklog = () => {
  const { navigate, worklogEmployee } = useWorklog()

  const worklogEmployeeTable = worklogEmployee.map((worklogEmployee) => {
    return (
      <WorklogEmployeeTable key={worklogEmployee.id} {...worklogEmployee} />
    )
  })

  return (
    <>
      <Button variant="contained" onClick={() => navigate(-1)}>
        GO BACK
      </Button>
      <TableContainer
        component={Paper}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Table sx={{ maxWidth: 800 }} size="small" aria-label="employees table">
          <TableHead>
            <TableRow>
              <TableCell align="center">FROM</TableCell>
              <TableCell align="center">TO</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{worklogEmployeeTable}</TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export { Worklog }
