export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const { endpoint } = await readBody(event)
  const url = `${config.public.apiUrl}/${endpoint}`

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Token ${config.private.apiKey}`,
      'Content-Type': 'application/json'
    }
  })

  return await response.json()
})
