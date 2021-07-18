<template>
  <dottmed-tabs fluid :data-source="defaultTabs">
    <el-row :gutter="12">
      <el-col :span="12"><facetime-card></facetime-card></el-col>
      <el-col :span="12"><facetime-card></facetime-card></el-col>
      <el-col :span="12"><facetime-card></facetime-card></el-col>
      <el-col :span="12"><facetime-card></facetime-card></el-col>
      <el-col :span="12"><facetime-card></facetime-card></el-col>
    </el-row>
  </dottmed-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { DottmedTabs } from "website/components";
import { FacetimeCard } from "./component";

import Demo from "website/utils/facetime";

export default defineComponent({
  components: { DottmedTabs, FacetimeCard },
  setup() {
    console.log(Demo);

    const defaultTabs = ref([
      { key: "0", label: "人员视频" },
      { key: "1", label: "救援车视频" },
      { key: "2", label: "航空视频" },
    ]);

    return { defaultTabs };
  },
});
</script>
