const BASE_URL = 'https://api.tiingo.com'
const TOKEN = '25a743ca2aa9216d7830a6ab38dc0c2e7af6fd31'

export default defineEventHandler(async (event) => {
  const { endpoint } = await readBody(event)
  const url = `${BASE_URL}/${endpoint}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Token ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  })

  return await response.json()
})
