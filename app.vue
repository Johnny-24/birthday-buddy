<template>
  <div class="container-sm auth-container">
    <div class="row auth-form" v-if="!authSuccess">
      <div class="col">
        <!-- Авторизация -->
        <form @submit.prevent="auth">
          <div class="mb-3">
            <label for="name" class="form-label">Имя</label>
            <input type="text" class="form-control" id="name" v-model="login" :required="true">
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Пароль</label>
            <input type="password" class="form-control" id="password" v-model="password" :required="true">
          </div>
          <div class="text-danger mb-3" v-show="authError">Неверный логин или пароль</div>
          <button type="submit" class="btn btn-primary">Войти</button>
        </form>
      </div>
    </div>

    <div class="container" v-else>
      <!-- Добавление -->
      <div class="d-flex justify-content-center mb-3">
        <form class="form btn-group" @submit.prevent="add">
          <input class="form-control" id="name" type="text" placeholder="Имя" v-model="newName" :required="true">
          <input class="form-control" id="date" type="date" placeholder="Год" v-model="newDate">
          <button type="submit" class="btn btn-primary">Добавить</button>
        </form>
      </div>

      <!-- Пусто -->
      <div v-if="!filteredList.length" class="text-center">Пусто</div>

      <!-- Список -->
      <ul v-else class="list-group">
        <li class="list-group-item d-flex" :class="item.status" v-for="(item, index) in filteredList" :key="item.id">
            <div class="d-flex align-items-center me-3">{{ index + 1 }}</div>
            <div v-if="!item.edit" class="d-flex align-items-center p-0">{{ item.name }} {{ item.date }}</div>
            <div class="ms-auto" v-show="!item.edit">
              <button class="btn btn-warning" v-show="!item.edit" type="button" @click="edit({ index, value: !item.edit })"><i class="bi bi-pencil"></i></button>
              <button class="btn btn-danger" v-show="!item.edit" type="button" @click="del(item.id)"><i class="bi bi-trash3"></i></button>
            </div>
            <form class="col d-flex" @submit.prevent="save(index)" :style="{padding: '0 5px'}" v-if="item.edit">
              <div class="col-6">
                <input class="form-control" type="text" placeholder="ФИО" v-model="editName" :required="true">
              </div>
              <div class="col-3">
                <input class="form-control" type="date" placeholder="Дата" v-model="editDate" :required="true">
              </div>
              <div class="ms-auto">
                <button class="btn btn-success" type="submit" :style="{marginLeft: '5px'}"><i class="bi bi-check-square"></i></button>
              </div>
            </form>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

useHead({
  link: [
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css',
      rel: 'stylesheet'
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css',
      rel: 'stylesheet'
    }
  ]
})

const authSuccess = ref(false)
const login = ref('')
const password = ref('')
const authError = ref(false)
const authData = reactive({
  login: '231231',
  password: '231231'
})

const newDate = ref('')
const newName = ref('')

const editDate = ref('')
const editName = ref('')

const list = ref([])

watch([login, password], () => {
  authError.value = false
})

const sort = (arr) => {
  const copyArr = JSON.parse(JSON.stringify(arr))
  return copyArr.sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)

    if (dateA.getMonth() === dateB.getMonth()) {
      return dateA.getDate() - dateB.getDate()
    } else {
      return dateA.getMonth() - dateB.getMonth()
    }
  })
}

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

  newName.value = ''
  newDate.value = ''

  list.value = newList
}

const filteredList = computed(() => {
  if (list.value.length > 1) {
    const res = sort(list.value)
    return res
  }
  return list.value
})

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

  const newArray = sort(list.value)
  list.value = newArray
}

const del = (id) => {
  const newList = list.value.filter(i => i.id !== id)
  list.value = newList
}

const auth = () => {
  if (authData.login === login.value && authData.password === password.value) {
    authSuccess.value = true
    localStorage.setItem('auth', JSON.stringify(true))
  } else {
    authError.value = true
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
.auth-container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-form {
    border: 1px solid #dee2e6;
    padding: 20px;
    width: 100%;
}
</style>
