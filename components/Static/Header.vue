<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useSymbolStore } from '@/stores/symbol'

const { data } = useAppConfig()
const store = useSymbolStore()

const state = ref({
  searchTerm: ''
})

const { isLoaded, symbol } = storeToRefs(store)

const handleClearSymbol = () => {
  state.value.searchTerm = ''
  store.clear()
}

const handleSearchSymbol = () => {
  store.set(state.value.searchTerm)
}
</script>

<template>
  <div class="bg-zinc-800 text-white flex flex-row p-4 justify-between items-center">
    <div class="flex flex-row gap-2 items-center">
      <Icon :name="data.icon" class="bg-white" size="24px" />
      <div class="text-xl">
        {{ data.title }}
      </div>
    </div>
    <div class="flex flex-row gap-1 items-center">
      <div class="hidden md:block">
        Search stock symbol
      </div>
      <input
        v-model="state.searchTerm"
        class="bg-zinc-800 text-center px-2 py-1 focus-visible:outline-none focus-within:outline-none focus-within:border-b-blue-800 border-b-2 w-20 uppercase"
        :class="state.searchTerm.length > 0 ? 'mr-0' : 'mr-4'"
        placeholder="TLSA"
        type="text"
        @keydown.enter="handleSearchSymbol"
      >
      <template v-if="state.searchTerm.length > 0">
        <Icon name="ooui:clear" size="10px" @click="handleClearSymbol" />
      </template>
    </div>
  </div>
</template>
