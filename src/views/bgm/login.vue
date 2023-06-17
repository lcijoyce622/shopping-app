<template lang="pug">
//- 請填寫功能描述👈
#bgm-login
  .form-area
    .title 後台登入頁
    aForm(ref="formRef" :rules="rules" :model="formState")
      aFormItem(name="account")
        aInput(v-model:value="formState.account" placeholder="account")
      aFormItem(name="password")
        aInput(v-model:value="formState.password" placeholder="password")
    aButton(@click="Submit") LOGIN
</template>

<script setup lang="ts">
// TODO 
import type { Rule } from 'ant-design-vue/es/form';

import { ref, reactive } from 'vue';
const formRef = ref();
const formState = reactive({
  account: '',
  password: ''
});
let checkPassword = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('請輸入密碼');
  }
};
let checkAccouont = async (_rule: Rule, value: number) => {
  if (!value) {
    return Promise.reject('請輸入帳號');
  }
};
const rules: Record<string, Rule[]> = {
  account: [{ required: true, validator: checkAccouont, trigger: 'blur' }],
  password: [{ required: true, validator: checkPassword, trigger: 'blur' }],
};
import { useRouter } from "vue-router";
import { useRoute } from 'vue-router'

const router = useRouter(); // 路由
const route = useRoute(); // 路由
// 跳轉 path
const ToPagePath = (path: string) => {
  if (path.length) {
    router.push({ path });
  }
}
const Submit = async () => {
  const _pass = await formRef.value.validate(["password"])
    .then(()=> true)
    .catch(()=> false);
  console.log(_pass);
  if (_pass) {
    ToPagePath('/bgm');
  }
};
</script>

<style lang="scss" scoped>
// 佈局
#bgm-login {
  padding-top: 200px;
  .form-area {
    width: 400px;
    padding: 20px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    text-align: center;
    .title {
      font-size: 20px;
      padding-bottom: 20px;
    }
  }
}
// 組件
#bgm-login {
}
</style>
