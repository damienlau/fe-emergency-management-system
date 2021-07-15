import { defineComponent } from "vue";
import DottmedButton from "./components/button";

export default defineComponent({
  setup() {
    return () => (
      <el-container>
        <el-header>
          <DottmedButton type="primary">物资入库</DottmedButton>
          <DottmedButton type="danger">物资入库</DottmedButton>
          <DottmedButton disabled type="primary">
            物资入库
          </DottmedButton>
          <DottmedButton plain type="primary">
            物资入库
          </DottmedButton>
        </el-header>
        <el-main></el-main>
      </el-container>
    );
  },
});
