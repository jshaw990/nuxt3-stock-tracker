<script lang="ts" setup>
const config = useAppConfig()
</script>

<template>
  <div class="w-full bg-zinc-800 px-4 py-1 text-white text-sm pb-20 text-center">
    <NuxtLink :to="config.author.portfolio" target="_blank">
      Created by {{ config.author.name }}
    </NuxtLink>
  </div>
</template>
