<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSymbolStore } from '@/stores/symbol'

const store = useSymbolStore()
const { data, isLoaded } = storeToRefs(store)
</script>

<template>
  <div>
    <!-- <StaticLoader :color="'#27272a'" :size="20" /> -->
    <div v-if="isLoaded">
      <div>{{ data.metaData.name }}</div>
      <div class="text-xs">
        {{ ' (' + data.metaData.exchangeCode }} : {{ data.metaData.ticker + ')' }}
      </div>
      <div>{{ data.metaData.description }}</div>
    </div>
    <div v-else>
      <StaticLoader :color="'#27272a'" :size="20" />
    </div>
  </div>
</template>
