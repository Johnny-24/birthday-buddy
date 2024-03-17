<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { MainLayout } from '@/shared/ui/layouts'

const route = useRoute()

const layout = computed(() => route.meta.layout || MainLayout)
</script>

<style>

</style>