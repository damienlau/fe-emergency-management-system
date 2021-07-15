<template>
  <el-button class="lh-22">
    <dottmed-icon v-if="icon" :icon="icon" />
    <slot />
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DottmedIcon } from "website/components/Icon";

export default defineComponent({
  name: "DottmedButton",
  components: { DottmedIcon },
  props: {
    icon: {
      type: String,
      require: true,
    },
  },
});
</script>
