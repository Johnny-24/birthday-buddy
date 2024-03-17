<template>
  <header :class="styles.header">
    <Logo />
    <Icon name="calendar" />
  </header>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import Logo from '@/shared/ui/logo'
import Icon from '@/shared/ui/icon'
</script>