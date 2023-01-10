import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { employeesReducer } from './features/Employees/employes-slice'
import { worklogReducer } from './features/Worklog/worklog-slice'

export const store = configureStore({
  reducer: {
    employees: employeesReducer,
    worklog: worklogReducer,
  },
  devTools: true,
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
