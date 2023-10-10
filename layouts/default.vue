<script lang="ts" setup>
const state = ref({
  symbol: ''
})
const searchSymbol = (symbol: string) => {
  console.log(symbol)
  state.value.symbol = symbol
}
</script>

<template>
  <div
    class="default-layout m-0 p-0"
  >
    <StaticHeader @search-symbol="searchSymbol" />
    <StaticPageLayout>
      <slot />
    </StaticPageLayout>
    <StaticFooter />
  </div>
</template>
