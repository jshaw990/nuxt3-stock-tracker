// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles.scss'],
  modules: [
    '@nuxt/image',
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  runtimeConfig: {
    private: {
      apiKey: process.env.API_KEY
    },
    public: {
      baseUrl: process.env.BASE_URL,
      apiUrl: process.env.API_BASE_URL
    }
  },
  typescript: {
    shim: false
  }
})
