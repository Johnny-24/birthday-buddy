<template>
  <div :class="styles.modal">
    <div :class="styles.content">
      <h5 :class="styles.title">{{ props.title }}</h5>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import styles from './styles.module.css'

interface Props {
  title: string
}

const props = defineProps<Props>()
</script>