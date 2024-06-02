// useSSE.ts
import { useEffect, useState } from 'react'
import { SSE, SSEOptions } from 'sse.js'

interface SSEData<T> {
  data: T | null
  error: Event | null
  isConnected: boolean
}

const useSSE = <T>(url: string, options: SSEOptions = {}): SSEData<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Event | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    const source = new SSE(url, options)

    const handleOpen = () => {
      setIsConnected(true)
      console.log('Connection opened')
    }

    const handleMessage = (e: MessageEvent) => {
      const payload = JSON.parse(e.data) as T
      setData(payload)
    }

    const handleError = (e: Event) => {
      setError(e)
      console.error('Error received:', e)
    }

    const handleAbort = () => {
      setIsConnected(false)
      console.log('Connection aborted')
    }

    source.addEventListener('open', handleOpen)
    source.addEventListener('message', handleMessage)
    source.addEventListener('error', handleError)
    source.addEventListener('abort', handleAbort)

    source.stream()

    return () => {
      source.removeEventListener('open', handleOpen)
      source.removeEventListener('message', handleMessage)
      source.removeEventListener('error', handleError)
      source.removeEventListener('abort', handleAbort)
      source.close()
    }
  }, [url, options])

  return { data, error, isConnected }
}

export default useSSE
