import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getWorklog } from '../../mock/api'
import { RootState } from '../../store'

export interface IWorklogResponseType {
  id: number
  employee_id: number
  from: string
  to: string
  isViolation: boolean
}

interface IWorklogStateType {
  worklogEmployee: IWorklogResponseType[]
}

export const getWorklogTC = createAsyncThunk(
  'worklog/get-worklog',
  async () => {
    return await getWorklog()
  }
)

const initialState: IWorklogStateType = {
  worklogEmployee: [],
}
const worklogSlice = createSlice({
  name: 'worklog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getWorklogTC.fulfilled,
      (state, action: PayloadAction<IWorklogResponseType[]>): void => {
        console.log(setDataWork(action.payload))
        state.worklogEmployee = setDataWork(action.payload)
      }
    )
  },
})

const MINIMUM_OF_DOCTORS = 3

export const setDataWork = (
  data: IWorklogResponseType[]
): IWorklogResponseType[] => {
  const maxTime = data.reduce((acc, curr) => {
    const currTime = new Date(curr.to).getTime()
    return currTime > acc ? currTime : acc
  }, 0)

  return data.map((value) => {
    const nextTimeStep = new Date(value.to).getTime() + 1000
    const limit = data.filter(
      (el) =>
        new Date(el.from).getTime() <= nextTimeStep &&
        new Date(el.to).getTime() >= nextTimeStep
    ).length
    const isViolation = limit < MINIMUM_OF_DOCTORS && nextTimeStep <= maxTime
    return {
      ...value,
      isViolation,
    }
  })
}

const isParamID = (paramID: string | undefined): paramID is string =>
  paramID !== undefined
export const worklogEmployeeSelectors = (
  state: RootState,
  paramID: string | undefined
): IWorklogResponseType[] => {
  if (isParamID(paramID)) {
    return state.worklog.worklogEmployee.filter(
      (worklog: IWorklogResponseType) => worklog.employee_id === +paramID
    )
  }
  return state.worklog.worklogEmployee
}

export const worklogReducer = worklogSlice.reducer
export const {} = worklogSlice.actions
