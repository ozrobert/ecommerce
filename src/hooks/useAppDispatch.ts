import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'

export default function useAppDispatch(): AppDispatch {
  return useDispatch()
}

// export const useAppDispatch: () => AppDispatch = useDispatch
