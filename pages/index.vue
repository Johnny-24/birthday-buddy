<template>
  <!-- <form @submit.prevent="onSubmit"> -->
    <div class="page">
      <div class="aside">

      </div>
      <VHeader />
    </div>

    <!-- <input type="text" placeholder="email" v-model="email">
    <input type="text" placeholder="password" v-model="password">
    <button type="submit">reg</button>
  </form> -->
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
const pending = ref(false)
const error = ref(null)


const onSubmit = async () => {
  try {
    pending.value = true
    await $fetch('/api/auth/register', {
      method: 'post',
      body: { email, password }
    })
    } catch (e) {
      console.log('e', e)
    } finally {
      pending.value = true
  }
}

</script>
