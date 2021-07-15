import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";

declare module "vue" {
  interface State {}

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
