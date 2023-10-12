export default (history: Array<any>) => {
  if (!Array.isArray(history) || history.length < 1) { return }

  const tickerList = [] as Array<string>

  history.forEach(x => tickerList.push(x.metaData.ticker))

  return tickerList
}
