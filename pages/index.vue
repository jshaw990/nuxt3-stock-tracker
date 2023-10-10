<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSymbolStore } from '@/stores/symbol'

const store = useSymbolStore()
const { isLoaded, symbol } = storeToRefs(store)
</script>

<template>
  <div>
    <StaticLoader :color="'#27272a'" :size="20" />
    <div v-if="isLoaded">
      {{ symbol }}
    </div>
    <div v-else>
      <div>Loading</div>
    </div>
  </div>
</template>
