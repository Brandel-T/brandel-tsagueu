<template>
  <div :class="['e-badge', badgeBackground]">
    <img
      v-if="useIcon(iconName!)"
      :class="[
        'e-badge-icon',
        { 'bg-accent': theme !== 'secondary' },
        { 'bg-secondary': theme === 'secondary' },
      ]"
      :src="String(useIcon(iconName!))"
      :alt="`svg icon: ${iconName}`"
    />
    <div
      :class="[
        'e-badge-content',
        { 'text-accent': theme !== 'secondary' },
        { 'text-secondary': theme === 'secondary' },
      ]"
    >
      {{ value }}
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "#imports";

type TBadgeTheme = "primary" | "secondary" | "outline";

export default defineNuxtComponent({
  props: {
    value: { type: String, required: false },
    iconName: { type: String, required: false },
    theme: { type: String as PropType<TBadgeTheme>, default: "primary" },
  },
  setup(props: any) {
    const icon = computed(() => `url(${useIcon(props.iconName)})`);
    const badgeBackground = computed(() =>
      props.theme === "secondary" ? "bg-tertiary" : "bg-accent-soft",
    );
    return { icon, badgeBackground };
  },
});
</script>

<style lang="scss" scoped>
.e-badge {
  @apply flex justify-between items-center gap-2
    w-fit min-w-[4rem]
    rounded-full;

  .e-badge-icon {
    @apply rounded-full h-6 w-6 object-center;
  }

  .e-badge-content {
    @apply text-xs md:text-sm mr-2;
  }
}
</style>
