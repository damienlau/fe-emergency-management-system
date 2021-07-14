import { createApp } from "vue";
import App from "./App";
import ElementPlus from "element-plus";

const dottmed = createApp(App);

dottmed.use(ElementPlus);

dottmed.mount("#dottmed");
