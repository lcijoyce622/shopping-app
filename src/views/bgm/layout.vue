<template lang="pug">
//- 請填寫功能描述👈
#bgm-layout
  p 後台畫面
  a-button(@click="ToPagePath('/')") 返回官網
  nav.row 
    RouterLink(to="/bgm") 後台首頁 
    RouterLink(to="/bgm/member") 後台會員
    RouterLink(to="/bgm/member/123123") 後台會員資料
    RouterLink(to="/bgm/staff") 員工分頁
  RouterView
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter(); // 路由
// 跳轉 path
const ToPagePath = (path: string) => {
  if (path.length) {
    router.push({ path });
  }
};
</script>

<style lang="scss" scoped>
// 佈局
#bgm-layout {
}
// 組件
#bgm-layout {
  .row {
    display: flex;
    gap: 10px;
  }
}
</style>
