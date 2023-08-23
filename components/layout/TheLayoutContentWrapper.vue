<script setup lang="ts">
const i18nHead = useLocaleHead({
  addSeoAttributes: true,
  addDirAttribute: true,
})

useHead(i18nHead)
</script>

<template>
  <slot />
</template>
