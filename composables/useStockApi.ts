const getToday = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')
  const day = String(currentDate.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

const apiFetch = async (endpoint: string) => {
  try {
    const { data } = await useAsyncData('endpoint', () => $fetch('/api/stockTicker', {
      method: 'POST',
      body: {
        endpoint
      }
    }))

    return data.value
  } catch (err) {
    console.error(`ERROR => ${err}`)
  }
}

export default async (symbol: string) => {
  const symbolIex = await apiFetch(`iex/${symbol}/prices?startDate=${getToday()}&resampleFreq=5min`)
  const symbolMetaData = await apiFetch(`tiingo/daily/${symbol}`)
  const symbolTop = await apiFetch(`iex/?tickers=${symbol}`)

  const data = {
    iex: symbolIex,
    metaData: symbolMetaData,
    top: symbolTop[0]
  }

  return data
}
