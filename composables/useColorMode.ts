const dark = [
  'text-white',
  'bg-zinc-600'
]

const light = [
  'text-zinc-800',
  'bg-white'
]

const getCachedMode = (toggleMode: boolean) => {
  if (window.localStorage.theme === 'dark' ||
  (!('theme' in window.localStorage) &&
  window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    return toggleMode ? 0 : 1
  } else {
    return toggleMode ? 1 : 0
  }
}

const getSchemeForMode = (mode: number) => {
  switch (mode) {
    case 0:
      return dark

    case 1:
      return light

    default:
      return light
  }
}

export default (toggleMode = false) => {
  const colorMode = getCachedMode(toggleMode)

  return getSchemeForMode(colorMode)
}
