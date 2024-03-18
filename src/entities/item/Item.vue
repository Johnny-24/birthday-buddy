<template>
  <div :class="styles.item">
    <div :class="styles.info">
      <div :class="styles.name">
        Name word
      </div>
      <time :class="styles.date">
        23/23/1990
      </time>
    </div>
    <div :class="styles.controlls">
      <Button variant="transparent">
        <Icon name="pencil" />
      </Button>

      <Button variant="transparent">
        <Icon name="trash" />
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import styles from './styles.module.css'
import Button from '@/shared/ui/button'
import Icon from '@/shared/ui/icon'
</script>