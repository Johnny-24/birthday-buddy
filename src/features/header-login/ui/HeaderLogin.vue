<template>
  <div class="header-login">
    <Avatar url="https://avatars.githubusercontent.com/u/18069516?s=80&v=4" />
    <Link path="/">Johnny</Link>
  </div>
</template>

<script setup lang="ts">
import Link from '@/shared/ui/link'
import Avatar from '@/shared/ui/avatar'
</script>

<style scoped>
.header-login {
  display: flex;
  align-items: center;
}
.header-login *:first-child {
  margin-right: 10px;
}
</style>
