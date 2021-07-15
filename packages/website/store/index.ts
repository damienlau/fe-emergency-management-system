import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import modules from "./modules";

export interface State {}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  modules,
});

export function useStore() {
  return baseUseStore(key);
}
