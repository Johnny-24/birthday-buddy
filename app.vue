<template>
  <div class="container">
    <form class="form" v-if="!authSuccess" @submit.prevent="auth">
      <input type="text" placeholder="Логин" v-model="login" :required="true">
      <input type="password" placeholder="Пароль" v-model="password" :required="true">
      <button type="submit">Войти</button>
    </form>

    <div  v-else>
      <form class="form" @submit.prevent="add">
        <input type="text" placeholder="ФИО" v-model="newName" :required="true">
        <input type="date" placeholder="Дата" v-model="newDate" :required="true">
        <button type="submit">Добавить</button>
      </form>
      <div v-if="!list.length">Пусто</div>
      <ul v-else>
        <li class="item" :class="item.status" v-for="(item, index) in list" :key="item.id">
          {{ index + 1 }}
          <div class="info" v-show="!item.edit"> {{ item.name }} {{ item.date }} </div>
          <form @submit.prevent="save(index)" :style="{padding: '0 5px'}">
            <input v-show="item.edit" type="text" placeholder="ФИО" v-model="editName" :required="true">
            <input v-show="item.edit" type="date" placeholder="Дата" v-model="editDate" :required="true">
            <button v-show="item.edit" type="submit" :style="{marginLeft: '5px'}">Сохранить</button>
          </form>
          <div class="controlls">
            <button v-show="!item.edit" type="button" @click="edit({ index, value: !item.edit })">Редактировать</button>
            <button v-show="!item.edit" type="button" @click="del(item.id)">Удалить</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const authSuccess = ref(false)
const login = ref('')
const password = ref('')

const authData = reactive({
  login: '231231',
  password: '231231'
})

const newDate = ref('')
const newName = ref('')

const editDate = ref('')
const editName = ref('')

const list = ref([])

const add = () => {
  const item = {
    id: Date.now(),
    name: newName.value,
    date: newDate.value,
    edit: false,
    status: 'default'
  }
  const newList = [
    ...list.value,
    item
  ]
  list.value = newList
  newName.value = ''
  newDate.value = ''
}

const edit = ({ index, value }) => {
  list.value.forEach(i => {
    i.edit = false
  })
  list.value[index].edit = value
  editName.value = list.value[index].name
  editDate.value = list.value[index].date
}

const save = (index) => {
  list.value[index].name = editName.value
  list.value[index].date = editDate.value

  editName.value = ''
  editDate.value = ''

  list.value.forEach(i => {
    i.edit = false
  })
}

const del = (id) => {
  const newList = list.value.filter(i => i.id !== id)
  list.value = newList
}

const auth = () => {
  if (authData.login === login.value && authData.password === password.value) {
    authSuccess.value = true
    localStorage.setItem('auth', JSON.stringify(true))
  }
}

onMounted(() => {
  const savedAuthData = localStorage.getItem('auth')
  if (savedAuthData === 'true') {
    authSuccess.value = true
  }
})
</script>

<style>
body {
  margin: 0;
}
.form {
  margin-bottom: 20px;
}
ul {
  padding: 0;
}
.container {
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.info {
  padding: 0 15px;
  margin-right: auto;
}
.item {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 15px;
}
.danger {
  color: red;
}
.warning {
  color: orange;
}
</style>
