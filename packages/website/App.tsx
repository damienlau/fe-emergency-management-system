import { defineComponent } from "vue";
import { message } from "ant-design-vue";
import { Modal } from "ant-design-vue";

export default defineComponent({
  setup() {
    message.warning("demodemo", 200, () => {
      console.log(111);
    });

    return () => (
      <>
        <router-view></router-view>
      </>
    );
  },
});
