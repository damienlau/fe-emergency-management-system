<script lang="tsx">
import { defineComponent } from "vue";
import "common/js/iconfont";

export default defineComponent({
  name: "DottmedIcon",
  props: { icon: { type: String, require: true } },
  setup(props) {
    return () => (
      <svg class="icon" aria-hidden="true">
        <use xlinkHref={"#dottmed-icon-" + props.icon}></use>
      </svg>
    );
  },
});
</script>
