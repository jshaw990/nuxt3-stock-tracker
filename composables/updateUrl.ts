export default (paramValue: string, paramName: string = 'ticker') => {
  // Get the current URL
  const currentURL = window.location.href

  // Create a new URL with the parameter added
  const newURL = new URL(currentURL)
  newURL.searchParams.set(paramName, paramValue.toUpperCase())

  // Use pushState to update the URL without refreshing the page
  window.history.pushState({}, '', newURL.toString())
}
