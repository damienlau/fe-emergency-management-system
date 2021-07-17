<template>
  <el-tabs
    :class="{ 'd-flex flex-column bg-secondary rounded-4 h-100 pt-22': fluid }"
    @tab-click="onClick"
    v-model="defaultActiveTabPane"
  >
    <el-tab-pane
      :key="index"
      :name="pane.key"
      v-for="(pane, index) in dataSource"
    >
      <template #label>
        <span class="fs-18 lh-26 px-14 py-4">{{ pane.label }}</span>
      </template>
      <section class="px-16">
        <slot></slot>
      </section>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "DottmedTabs",
  props: {
    dataSource: {
      type: Array,
      require: true,
    },
    fluid: { type: Boolean, require: false, default: false },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const defaultActiveTabPane = computed(() => {
      return props.dataSource[0]["key"];
    });

    console.log(defaultActiveTabPane.value);

    const onClick = (evt: MouseEvent) => {
      emit("click", evt);
    };

    return { defaultActiveTabPane, onClick };
  },
});
</script>
