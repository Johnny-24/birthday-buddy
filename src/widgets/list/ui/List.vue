<template>
  <ul :class="styles.list">
    <li :class="styles.item">
      <Item />
    </li>
    <li :class="styles.item">
      <Item />
    </li>
    <li :class="styles.item">
      <Item />
    </li>
  </ul>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import Item from '@/entities/item'
</script>