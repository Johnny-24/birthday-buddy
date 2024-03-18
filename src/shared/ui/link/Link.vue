<template>
  <router-link :to="path" class="link">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
interface Props {
  path: string
}

const path = defineProps<Props>()
</script>

<style scoped>
.link {
  color: #fff;
  font-size: 14px;
}
</style>