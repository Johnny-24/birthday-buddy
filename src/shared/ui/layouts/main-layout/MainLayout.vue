<template>
  <div :class="styles.layout">
    <Header />
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import { Header } from '@/widgets/header'
</script>
