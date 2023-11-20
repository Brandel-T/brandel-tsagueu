<template>
  <a
    :href="`${email ? 'mailto:' : ''}${url}`"
    :target="'_blank'"
    class="anchor link relative hover:cursor-pointer w-fit z-0"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <span class="flex flex-col-reverse items-center gap-1 w-fit">
      <span class="w-fit mb-1">
        <span v-if="type === 'internal' && hashtagVisible" class="hashtag"
          >#</span
        >
        <span
          class="text-slate-400 text-xl sm:text-2xl md:text-3xl font-light mr-2"
        >
          {{ name }}
        </span>
        <span
          v-if="type === 'external' && externalIconVisible"
          class="font-bold text-xl sm:text-2xl md:text-3xl"
          :class="{ 'translate-x-1 -translate-y-1': hover }"
          >↗</span
        >
      </span>
      <span class="underline"></span>
    </span>
  </a>
</template>

<script lang="ts">
import { PropType } from "vue";

type LinkType = "external" | "internal";
export default {
  props: {
    type: { type: String as PropType<LinkType>, default: "internal" },
    name: { type: String, required: true },
    hashtagVisible: { type: Boolean, default: true },
    externalIconVisible: { type: Boolean, default: true },
    url: { type: String, default: "" },
    email: { type: Boolean, default: false },
  },
  setup() {
    const hover = ref<boolean>(false);
    return { hover };
  },
};
</script>

<style scoped lang="scss">
.underline {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: $text-color;
  transition: width 0.5s;
}
.link:hover .underline {
  border: none;
  width: 100%;
}
</style>
