<template>
  <el-button :loading="loading">
    <dottmed-icon
      v-if="icon && !loading"
      :class="{ 'me-4': icon && $slots.default }"
      :icon="icon"
    ></dottmed-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DottmedIcon from "../Icon/Icon.vue";

export default defineComponent({
  name: "DottmedButton",
  components: { DottmedIcon },
  props: {
    icon: { type: String, require: false },
    loading: { type: Boolean, require: false },
  },
  setup() {},
});
</script>
