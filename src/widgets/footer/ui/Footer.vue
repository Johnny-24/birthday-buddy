<template>
  <footer :class="styles.footer">
    <MiniButton>
      <template #icon>
        <Icon name="list" />
      </template>
      All
    </MiniButton>

    <MiniButton>
      <template #icon>
        <Icon name="check" />
      </template>
      Completed
    </MiniButton>
  </footer>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import MiniButton from '@/shared/ui/mini-button'
import Icon from '@/shared/ui/icon'
</script>
