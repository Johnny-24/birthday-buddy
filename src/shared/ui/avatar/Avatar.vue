<template>
  <img :src="url" alt="avatar" class="avatar">
</template>

<script setup lang="ts">
interface Props {
  url: string
}

const { url } = defineProps<Props>()
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
</style>
