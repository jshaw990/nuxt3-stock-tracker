<template>
  <div class="page-layout p-4">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-layout {
    min-height: calc(100vh - 70px - 30px - 2rem);
    background-color: white;
}
</style>
