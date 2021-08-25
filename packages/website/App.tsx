import { defineComponent } from "vue";
import { message } from "ant-design-vue";
import { Modal } from "ant-design-vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <h1>test</h1>
        <router-view></router-view>
      </>
    );
  },
});
