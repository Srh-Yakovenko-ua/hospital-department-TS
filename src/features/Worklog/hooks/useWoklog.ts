import { useAppDispatch, useAppSelector } from '../../../store'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getWorklogTC, worklogEmployeeSelectors } from '../worklog-slice'

export const useWorklog = () => {
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const worklogEmployee = useAppSelector((state) =>
    worklogEmployeeSelectors(state, id)
  )

  useEffect(() => {
    const promise = dispatch(getWorklogTC())
    return () => {
      promise.abort()
    }
  }, [])

  return { id, navigate, worklogEmployee }
}
