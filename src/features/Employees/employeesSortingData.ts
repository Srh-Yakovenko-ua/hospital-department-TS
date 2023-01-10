import { IEmployeesResponseType } from './employes-slice'

export const employeesSortingData = (
  data: IEmployeesResponseType[]
): IEmployeesResponseType[] => {
  return data
    .map((employees) => ({
      ...employees,
      birthDate: birthDateChange(employees.birthDate),
    }))
    .sort((a, b) => a.firstName.localeCompare(b.firstName))
}
export const birthDateChange = (birthDate: string): string => {
  return birthDate.split('-').reverse().join('-')
}
