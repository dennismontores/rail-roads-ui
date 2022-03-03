const withHandleException = (fun) => {
  return () => {
    try {
      return fun()
    } catch (error) {
      return { error }
    }
  }
}

export const update = (url, data) =>
  withHandleException(async () => {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
    const response = await fetch(`http://localhost:8080/${url}`, options)
    return { data: await response.json(), status: response.status }
  })()

export const remove = (url) =>
  withHandleException(async () => {
    const options = {
      method: 'DELETE',
    }
    const response = await fetch(`http://localhost:8080/${url}`, options)
    return { status: response.status }
  })()
