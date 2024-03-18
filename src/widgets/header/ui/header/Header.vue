<template>
  <header :class="styles.header">
    <Logo />


    <HeaderLogin />
  </header>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import Logo from '@/shared/ui/logo'
import HeaderLogin from '@/features/header-login'
</script>