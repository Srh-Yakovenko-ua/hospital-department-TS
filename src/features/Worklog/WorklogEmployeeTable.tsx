import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import { IWorklogResponseType } from './worklog-slice'

const WorklogEmployeeTable: React.FC<IWorklogResponseType> = ({
  id,
  from,
  to,
  isViolation,
  ...restProps
}) => {
  return (
    <TableRow
      key={id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        backgroundColor: isViolation ? 'red' : null,
      }}
    >
      <TableCell align="center">{from}</TableCell>
      <TableCell align="center">{to}</TableCell>
    </TableRow>
  )
}

export { WorklogEmployeeTable }
