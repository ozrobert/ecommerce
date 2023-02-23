import axios from 'axios'
import { useEffect, useReducer, useRef } from 'react'
import createRequest from '../utils/createRequest'

interface State<T> {
  data?: T
  error?: string
}

type Cache<T> = { [url: string]: T }

type Action<T> =
  | { type: 'loading' }
  | { type: 'fetched'; payload: T }
  | { type: 'error'; payload: string }

export default function useFetch<T>(url?: string): State<T> {
  const cache = useRef<Cache<T>>({})
  const cancelRequest = useRef(false)

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
  }

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case 'loading':
        return { ...initialState }
      case 'fetched':
        return { ...initialState, data: action.payload }
      case 'error':
        return { ...initialState, error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    if (!url) return undefined

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] })
        return
      }

      try {
        const response = await createRequest.get(url)
        const data = response.data.data as T
        cache.current[url] = data
        if (cancelRequest.current) return
        dispatch({ type: 'fetched', payload: data })
      } catch (error) {
        if (cancelRequest.current) return

        if (axios.isAxiosError(error)) {
          dispatch({ type: 'error', payload: error.message })
        } else if (error instanceof Error) {
          dispatch({ type: 'error', payload: error.message })
        } else {
          // unknown error
        }
      }
    }

    fetchData()

    return () => {
      cancelRequest.current = true
    }
  }, [url])

  return state
}
