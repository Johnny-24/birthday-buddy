<template>
  <div class="layout">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/widgets/header'
import Footer from '@/widgets/footer'
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
