<template>
  <header class="vHeader">
    <router-link to="/">Logo</router-link>
    <VMenu />
    <!-- <div class="vHeader__user"> -->
      <!-- <UiAvatar /> -->
      <!-- <ul class="header-menu">
        <li class="header-menu__item">
          <a href="lk.html" class="header-menu__link">Личный кабинет</a>
        </li>
        <li class="header-menu__item">
          <a href="auth.html" class="header-menu__link">Выйти</a>
        </li>
      </ul> -->
    <!-- </div> -->
  </header>
</template>

<style lang="scss" scoped>
  .vHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background: #363636;
    height: 70px;
    margin-bottom: 50px;
    // &__user {
    //   position: relative;
    //   display: flex;
    //   align-items: center;
    //   height: 100%;
    // }
  }
</style>
