import { defineStore } from 'pinia'
import useStockApi from '@/composables/useStockApi'

export const useSymbolStore = defineStore('symbol', {
  state: () => ({
    data: {},
    isLoaded: false,
    symbol: ''
  }),
  actions: {
    clear () {
      this.data = {}
      this.symbol = ''
      this.isLoaded = true
    },
    loading () {
      this.isLoaded = false
    },
    async set (symbol: string) {
      this.isLoaded = false
      this.symbol = symbol
      const request = await useStockApi(symbol)
      this.data = request
      this.isLoaded = true
    }
  },
  getters: {
    getIsLoaded: state => state.isLoaded,
    getSymbol: state => state.symbol
  }
})
