import { useState, useEffect, useRef } from 'react'

// This custom hook centralizes and streamlines handling of HTTP calls
export default function useFetch(url, init) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const prevInit = useRef()
  const prevUrl = useRef()

  useEffect(() => {
    // Only refetch if url or init params change.
    if (prevUrl.current === url && prevInit.current === init) return
    prevUrl.current = url
    prevInit.current = init
    fetch('http://localhost:8080/' + url, init)
      .then((response) => {
        if (response.ok) return response.json()
        setError(response)
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error(err)
        setError(err)
      })
      .finally(() => setLoading(false))
  }, [init, url])

  return { data, loading, error }
}
