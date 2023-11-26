<script lang="ts">
export default {
  props: {
    recentTechnologies: { type: Array<string>, required: false, default: [] },
    items: { type: Array<TechStackType>, required: false, default: [] },
  },
};
</script>

<template>
  <section class="tech-stack page-section !min-h-screen">
    <SectionHeader title="Tech Stack" />
    <article
      class="section-body flex flex-col items-center justify-center pb-12"
    >
      <header
        class="text body-text mb-8 md:mb-12"
        data-aos="fade-right"
        data-aos-delay="150"
        data-aos-duration="1500"
      >
        Recently worked with:
        <span
          v-for="(recent, index) in recentTechnologies"
          :key="recent"
          class="highlight"
        >
          {{ recent }}
          <span v-if="index == recentTechnologies.length - 2" class="body-text"
            >and
          </span>
          <span v-if="index < recentTechnologies.length - 2">, </span>
        </span>
      </header>

      <div class="flex-1">
        <div class="w-full lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
          <div
            v-for="(item, index) in items"
            :key="item.category"
            data-aos="fade-up-right"
            data-aos-duration="1500"
            :data-aos-delay="index * 100"
            class="w-full md:w-auto bg-accent-soft rounded p-6 items-stretch mb-2 lg:mb-0 shadow-lg shadow-primary"
          >
            <div class="flex items-end justify-between">
              <span class="heading-2">{{ item.category }}</span>
              <IconBackend
                v-if="item.category === 'Backend'"
                class="icon-secondary !h-12 !w-12"
              />
              <IconDesktop
                v-else-if="item.category === 'Frontend'"
                class="icon-secondary !h-12 !w-12"
              />
              <IconPhone
                v-else-if="item.category === 'Mobile'"
                class="icon-secondary !h-12 !w-12"
              />
              <IconSettings v-else class="icon-secondary !h-12 !w-12" />
            </div>

            <div class="mt-4 flex flex-wrap gap-4">
              <span
                v-for="tech in item.technologies"
                :key="tech"
                class="body-text !text-accent"
                >{{ tech }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped lang="scss">
.tech-stack {
  @apply h-screen overflow-y-hidden pb-12;
}
</style>
