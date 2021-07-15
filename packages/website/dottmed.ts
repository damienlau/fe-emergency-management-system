import { createApp } from "vue";
import App from "./App";
import ElementPlus from "element-plus";
// import { store, key } from "./store";

import "common/scss/dottmed.scss";

const dottmed = createApp(App);

dottmed.use(ElementPlus);
// dottmed.use(store, key);

dottmed.mount("#dottmed");
