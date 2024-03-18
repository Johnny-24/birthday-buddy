<template>
  <button :class="styles.button">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
</script>