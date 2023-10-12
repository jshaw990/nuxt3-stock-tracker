<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSymbolStore } from '@/stores/symbol'

const store = useSymbolStore()
const { data, isLoaded, getHistoricalTickers }: any = storeToRefs(store)

onMounted(async () => {
  await store.set('ba')
})
</script>

<template>
  <div>
    <div v-if="isLoaded" class="flex flex-row gap-5">
      <div class="flex flex-col gap-2">
        <div class="flex flex-row justify-between gap-2">
          <h1 class="text-4xl overflow-x-clip">
            {{ data.metaData.name }}
          </h1>
          <div :class="data.top.last > 5 ? 'text-2xl' : 'text-4xl'">
            ${{ data.top.last }}
          </div>
        </div>
        <div class="text-xs">
          {{ ' (' + data.metaData.exchangeCode }} : {{ data.metaData.ticker + ')' }}
        </div>
        <div>{{ data.metaData.description }}</div>
      </div>
      <div>
        <div v-for="(item, index) in getHistoricalTickers" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <div v-else>
      <StaticLoader :color="'#27272a'" :size="20" />
    </div>
  </div>
</template>
