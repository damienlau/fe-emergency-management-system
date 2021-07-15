<template>
  <el-button class="lh-22 px-12 py-6">
    <slot name="icon" />
    <slot />
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DottmedButton",
});
</script>
