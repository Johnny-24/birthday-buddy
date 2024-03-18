<template>
  <button :class="['button', `variant-${variant}`]">
    <slot name="icon"></slot>
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: string
}

const { variant } = defineProps<Props>()
</script>

<style scoped>
.button {
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  min-height: 45px;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  min-width: 100px;
  padding: 10px;
}

.variant-primary {
  background: var(--primary);
}

.variant-secondary {
  background: var(--secondary);
  color: #000;
}

.variant-white {
  background: #fff;
  color: var(--primary);
}

.variant-transparent {
  border-radius: 0;
  min-height: auto;
  min-width: auto;
  padding: 0;
}
</style>
