<template>
  <form :class="styles.form">
    <div :class="styles.formField">
      <Input placeholder="name" />
    </div>

    <div :class="styles.formField">
      <Input placeholder="date" />
    </div>

    <Button variant="primary">Add</Button>
  </form>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import Input from '@/shared/ui/input/Input.vue'
import Button from '@/shared/ui/button'
</script>