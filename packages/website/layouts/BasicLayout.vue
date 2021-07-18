<template>
  <el-container class="w-100 h-100">
    <el-header class="bg-header px-32" height="72px">
      <h1>test:{{ hasBackground }}</h1>
    </el-header>
    <el-main class="p-16">
      <router-view />
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["hasBackground"],
  setup() {},
});
</script>
