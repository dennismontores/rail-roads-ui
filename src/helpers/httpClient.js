const withHandleException = (fun) => {
  return () => {
    try {
      return fun()
    } catch (error) {
      return { error }
    }
  }
}

export const update = withHandleException(async (url, data) => {
  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  const response = await fetch(url, options)
  return await response.json()
})
