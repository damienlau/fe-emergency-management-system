<template>
  <div class="bg-info border-0 rounded-4 pb-8 mb-12">
    <!-- Card Header Start -->
    <div class="p-8 d-flex flex-row align-items-center justify-content-between">
      <span class="fs-16 lh-24">卡片名称</span>
      <el-space>
        <dottmed-button
          class="px-8"
          type="info"
          icon="fullscreen-expand"
        ></dottmed-button>
        <dottmed-button
          class="px-8"
          type="danger"
          icon="close"
        ></dottmed-button>
      </el-space>
    </div>
    <!-- Card Header End -->
    <!-- Card Body Start -->
    <div class="bg-header rounded-4 mx-8">
      <el-empty :image="emptyImage" description="暂无视频"></el-empty>
    </div>
    <!-- Card Body End -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DottmedButton } from "website/components";
import emptyImage from "common/img/command_facetime_card_empty@2x.png";

export default defineComponent({
  name: "FacetimeCard",
  components: { DottmedButton },
  setup() {
    return { emptyImage };
  },
});
</script>
