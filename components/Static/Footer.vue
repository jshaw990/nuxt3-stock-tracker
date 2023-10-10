<script lang="ts" setup>
const config = useAppConfig()
</script>

<template>
  <div class="w-full bg-zinc-800 px-4 pt-4 pb-20 text-white text-sm text-center">
    <NuxtLink :to="config.author.portfolio" target="_blank">
      Created by {{ config.author.name }}
    </NuxtLink>
  </div>
</template>
