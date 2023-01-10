import React from 'react'
import { TableCell, TableRow } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { IEmployeesResponseType } from './employes-slice'

const EmployeesItem: React.FC<IEmployeesResponseType> = ({
  id,
  middleName,
  firstName,
  lastName,
  birthDate,
  ...restProps
}) => {
  return (
    <TableRow
      key={id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row" align="left">
        {id}
      </TableCell>
      <TableCell align="center">
        <NavLink to={`worklog/${id}`}>
          {` ${firstName} ${middleName}  ${lastName} `}
        </NavLink>
      </TableCell>
      <TableCell align="right">{birthDate}</TableCell>
    </TableRow>
  )
}

export { EmployeesItem }
