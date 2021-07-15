import { defineComponent } from "vue";
import { DottmedButton } from "./components/button";

export default defineComponent({
  setup() {
    return () => (
      <el-container>
        <el-header>
          <DottmedButton type="primary" icon="lending">
            借货
          </DottmedButton>
          <DottmedButton type="danger">借货</DottmedButton>
          <DottmedButton disabled type="primary">
            借货
          </DottmedButton>
          <DottmedButton plain type="primary" icon="repair">
            维修
          </DottmedButton>
          <DottmedButton type="text" icon="arrow-double-left">
            维修
          </DottmedButton>
        </el-header>
        <el-main></el-main>
      </el-container>
    );
  },
});
