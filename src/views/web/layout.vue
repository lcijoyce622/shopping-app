<template lang="pug">
//- 請填寫功能描述👈
#layout
  p 官網畫面
  nav.row
    RouterLink(to="/") Home
    RouterLink(to="/about") About
    RouterLink(to="/bgm-login") BGM login
    //- RouterLink(to="/firebase") Firebase
  RouterView
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { getCurrentInstance } from "vue";
// const { proxy } = getCurrentInstance()!;
// const $firebase = proxy!.$firebase;

// script
</script>

<style lang="scss" scoped>
// 佈局
#layout {
}
// 組件
#layout {
  .row {
    display: flex;
    gap: 10px;
  }
}
</style>
