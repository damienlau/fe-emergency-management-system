import { createApp } from "vue";
import App from "./App";
import ElementPlus from "element-plus";
// import { store, key } from "./store";
import Router from "./router";

import "common/scss/dottmed.scss";

const dottmed = createApp(App);

dottmed.use(ElementPlus);
dottmed.use(Router);
// dottmed.use(store, key);

dottmed.mount("#dottmed");
