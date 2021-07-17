import { defineComponent } from "vue";
import { DottmedIcon } from "website/components";

export default defineComponent({
  name: "DottmedButton",
  emits: ["click"],
  props: {
    icon: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      require: false,
      default: "primary",
    },
  },
  setup(props, { slots, emit }) {
    // 事件
    const handleClick = (evt: MouseEvent) => {
      emit("click", evt);
    };

    return () => (
      <el-button class="lh-22" type={props.type} onClick={handleClick}>
        {props.icon && <DottmedIcon class="me-4" icon={props.icon} />}
        {slots.default && slots.default()}
      </el-button>
    );
  },
});
