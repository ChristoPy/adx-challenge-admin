export function makeHeaders() {
  if (process.client) {
    const token = localStorage.getItem('token')
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  }

  return {}
}
