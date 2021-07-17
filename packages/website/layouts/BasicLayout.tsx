import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return () => (
      <el-container class="w-100 h-100">
        <el-header class="bg-header px-32" height="70px"></el-header>
        <el-main class="p-16">
          <router-view />
        </el-main>
      </el-container>
    );
  },
});
