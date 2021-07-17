import { defineComponent } from "vue";
import { DottmedButton } from "website/components";

export default defineComponent({
  name: "DottmedInput",
  props: {
    prefix: {
      type: String,
      require: false,
    },
    search: {
      type: Boolean,
      require: false,
    },
    suffix: {
      type: String,
      require: false,
    },
  },
  setup(props) {
    const handleClick = () => {
      console.log(123);
    };

    return () => (
      <el-input>
        {{
          suffix: () => (
            <DottmedButton class="text-white" icon="search" type="text" />
          ),
        }}
      </el-input>
    );
  },
});
