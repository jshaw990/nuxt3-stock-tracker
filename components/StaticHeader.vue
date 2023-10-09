<script lang="ts" setup>
const { data } = useAppConfig()
</script>

<template>
  <div class="bg-black text-white flex flex-row gap-2 p-4 items-center">
    <Icon :name="data.icon" class="bg-white" />
    <div class="text-xl">
      {{ data.title }}
    </div>
  </div>
</template>
