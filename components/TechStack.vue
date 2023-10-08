<script lang="ts">
import { TechStackType } from "~/utils/models";

export default {
  props: {
    recentTechnologies: { type: Array<String>, required: true },
    items: { type: Array<TechStackType>, required: true },
  },
};
</script>

<template>
  <section class="tech-stack page-section">
    <SectionHeader title="Tech Stack" />
    <div class="section-body flex flex-col items-center justify-center pb-12">
      <div class="text mb-8 md:mb-12">
        Recently worked with:
        <span
          v-for="(recent, index) in recentTechnologies"
          :key="recent"
          class="highlight"
        >
          {{ recent }}
          <span v-if="index == recentTechnologies.length - 2">and </span>
          <span v-if="index < recentTechnologies.length - 2">, </span>
        </span>
      </div>

      <div class="flex-1 w-full lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-2">
        <div
          v-for="item in items"
          :key="item.category"
          class="bg-accent-soft rounded p-6 items-stretch mb-2 lg:mb-0 shadow-lg shadow-primary"
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
  </section>
</template>

<style scoped lang="scss"></style>
