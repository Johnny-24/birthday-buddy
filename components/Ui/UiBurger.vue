<template>
  <div class="uiBurger" />
</template>

<style lang="scss" scoped>
.uiBurger {
  width: 30px;
  height: 30px;
  position: relative;
  border-top: 14px solid #363636;
  border-bottom: 14px solid #363636;
  background: #fff;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: -14px;
    width: 100%;
    height: 2px;
    background: #fff;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -14px;
    width: 100%;
    height: 2px;
    background: #fff;
  }
}
</style>
