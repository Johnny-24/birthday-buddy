<template>
  <page class="page">
    <div class="page_container">
      <List />
    </div>

    <RoundButton>
      <Icon name="plus"/>
    </RoundButton>

    <Modal title="Add Item" v-if="false">
      <AddForm />
    </Modal>

    <Modal title="Add Item" v-if="false">
      <EditForm />
    </Modal>
  </page>
</template>

<script setup lang="ts">
import List from '@/widgets/list'
import RoundButton from '@/shared/ui/round-button'
import Icon from '@/shared/ui/icon'
import Modal from '@/widgets/modal/ui/Modal.vue'
import AddForm from '@/entities/add-form/AddForm.vue'
// import EditForm from '@/entities/add-form/EditForm.vue'
</script>

<style scoped>
.page {
  background: var(--secondary);
  flex: auto;
  position: relative;
}

.page_container {
  padding: 22px 10px;
  display: flex;
  justify-content: center;
}
</style>