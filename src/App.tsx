import React from 'react'
import './App.css'
import { EmployeesList } from './features/Employees/EmployeesList'
import { Route, Routes } from 'react-router-dom'
import { Worklog } from './features/Worklog/Worklog'

function App() {
  return (
    <div>
      <Routes>
        <Route path={'/'} index element={<EmployeesList />} />
        <Route path={'/employees'} element={<EmployeesList />} />
        <Route path={'worklog/:id'} element={<Worklog />} />
      </Routes>
    </div>
  )
}

export default App
