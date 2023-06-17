import antd from "@/plugin/antd";
import { createApp } from "vue";
import { createPinia } from "pinia";
// import $firebase from "@/plugin/firebase";

import router from "./router";
import App from "./App.vue";

const app = createApp(App);
// app.config.globalProperties.$firebase = $firebase;

app.use(createPinia());
app.use(router);
app.use(antd);
app.mount("#app");