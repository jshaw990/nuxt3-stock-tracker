import { defineStore } from 'pinia'
import useHistory from '@/composables/useHistory'
import useStockApi from '@/composables/useStockApi'
import updateUrl from '@/composables/updateUrl'

export const useSymbolStore = defineStore('symbol', {
  state: () => ({
    data: {},
    history: [] as Array<any>,
    isLoaded: false,
    symbol: ''
  }),
  actions: {
    clear () {
      this.data = {}
      this.history = []
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
      updateUrl(symbol)
      this.data = request
      this.history.unshift(request)
      this.isLoaded = true
    }
  },
  getters: {
    getHistoricalTickers: state => useHistory(state.history),
    getIsLoaded: state => state.isLoaded,
    getSymbol: state => state.symbol
  }
})
