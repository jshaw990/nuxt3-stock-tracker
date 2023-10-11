export default (paramValue: string, paramName: string = 'ticker') => {
  const config = useRuntimeConfig()
  const url = new URL(config.public.baseUrl)
  url.searchParams.set(paramName, paramValue.toUpperCase())
  window.history.pushState({}, '', url.toString())
}
