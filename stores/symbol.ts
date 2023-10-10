import { defineStore } from 'pinia'

export const useSymbolStore = defineStore('symbol', {
  state: () => ({
    isLoaded: true,
    symbol: 'AAPL'
  }),
  actions: {
    clear () {
      this.isLoaded = true
      this.symbol = ''
    },
    loading () {
      this.isLoaded = false
    },
    set (data: string) {
      this.isLoaded = true
      this.symbol = data
    }
  },
  getters: {
    getIsLoaded: state => state.isLoaded,
    getSymbol: state => state.symbol
  }
})
