import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getEmployees } from '../../mock/api'
import { RootState } from '../../store'
import { employeesSortingData } from './employeesSortingData'

export interface IEmployeesResponseType {
  id: number
  firstName: string
  lastName: string
  middleName: string
  birthDate: string
  phone: string
}

interface IEmployeesStateType {
  employeesList: IEmployeesResponseType[]
}

export const getEmployeesTC = createAsyncThunk(
  'employees/get-employees',
  async () => {
    return await getEmployees()
  }
)
const initialState: IEmployeesStateType = {
  employeesList: [],
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getEmployeesTC.fulfilled,
      (state, action: PayloadAction<IEmployeesResponseType[]>): void => {
        state.employeesList = employeesSortingData(action.payload)
      }
    )
  },
})

export const employeesReducer = employeesSlice.reducer
export const {} = employeesSlice.actions

export const employeesSelectors = (
  state: RootState
): IEmployeesResponseType[] => state.employees.employeesList
