<script lang="ts">
import "vue3-carousel/dist/carousel.css";

import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

export default defineNuxtComponent({
  name: "Projects",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  props: {
    projects: {
      type: Array<ProjectType>,
      required: false,
      default: [],
    },
  },
  setup() {
    const selectedProject = ref<number>(0);
    const carouselSettings = ref({
      wrapAround: true,
      transition: 500,
      autoplay: 3500,
      itemsToShow: 1,
    });
    const carouselBreakpoints = ref({
      768: {
        itemsToShow: 1.3,
        snapAlign: "center",
      },
    });

    function selectProject(accordionIndex: number) {
      selectedProject.value = accordionIndex;
    }

    function isAccordionActive(index: number) {
      return selectedProject.value === index;
    }

    return {
      selectedProject,
      selectProject,
      isAccordionActive,
      carouselSettings,
      carouselBreakpoints,
    };
  },
  methods: { useImage, useDateFormat },
});
</script>

<template>
  <section class="projects page-section">
    <SectionHeader title="Projects" />
    <article class="section-body flex-row-reverse">
      <div class="flex-1">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="accordion"
        >
          <div
            :class="{
              'accordion-open': isAccordionActive(index),
              'accordion-close': !isAccordionActive(index),
            }"
            class="accordion-header"
            @click="selectProject(index)"
          >
            <span :class="{ 'text-accent': isAccordionActive(index) }">{{
              project.title
            }}</span>
            <div class="flex justify-center items-center gap-2">
              <a
                v-if="isAccordionActive(index)"
                class="text-secondary"
                :href="project.url"
                target="_blank"
              >
                <Badge value="View on GitHub ↗" icon-name="github" />
              </a>
              <div class="badge-outline">{{ project.type }}</div>
            </div>
          </div>
          <div
            v-if="isAccordionActive(index)"
            :class="{ hidden: !isAccordionActive(index) }"
            class="accordion-body transition-all duration-300 ease-in"
            data-aos="zoom-up"
            data-aos-duration="600"
            data-aos-easing="ease-in-out-sine"
          >
            <div class="mb-4">
              <div class="highlight mb-2 md:mb-4 mt-6 w-fit">Description</div>
              <div class="body-text mb-4 mx-auto w-fit">
                {{ project.description }}
              </div>
            </div>
            <div class="h-96">
              <Carousel
                class="h-full"
                v-bind="carouselSettings"
                :breakpoints="carouselBreakpoints"
              >
                <Slide
                  v-for="(asset, assetIndex) in project.assets"
                  :key="asset"
                >
                  <img
                    :key="asset"
                    class="project__assets--item"
                    :src="asset"
                    :alt="`Portfolio: Project ${project.title} preview ${assetIndex}`"
                  />
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>
            </div>
            <div>
              <div class="highlight mb-2 md:mb-4 mt-4 w-fit">
                Technologies used
              </div>
              <div class="body-text w-fit mx-auto">
                <ul
                  class="flex flex-wrap gap-2 justify-center md:justify-start"
                >
                  <li v-for="tech in project.technologies" :key="tech.name">
                    <Badge :value="tech.name" :icon-name="tech.iconName" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-header__container--desktop !flex-1">
        <div
          v-for="(project, index) in projects"
          :key="index"
          :class="{
            'accordion-open': isAccordionActive(index),
            'accordion-close': !isAccordionActive(index),
          }"
          class="accordion-header"
          @click="selectProject(index)"
        >
          <span :class="{ 'text-accent': isAccordionActive(index) }">{{
            project.title
          }}</span>
          <div class="flex justify-center items-center gap-2">
            <a
              v-if="isAccordionActive(index)"
              class="text-secondary"
              :href="project.url"
              target="_blank"
            >
              <Badge value="View on GitHub ↗" icon-name="github" />
            </a>
            <div class="badge-outline">{{ project.type }}</div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
.accordion-body {
  @apply flex flex-col;
}
.project__assets {
  @apply flex-1 flex h-full snap-mandatory snap-x overflow-x-scroll overflow-y-hidden;
}
.project__assets::-webkit-scrollbar {
  height: 0.5rem;
  border: 1px solid $accent;
  margin-top: 1rem;
  border-radius: 4rem;
  position: relative;

  &::after,
  &::before {
    content: "";
    display: block;
    width: 2rem;
    height: 100%;
    position: absolute;
  }
}

:deep(.carousel) {
  height: 100%;
  justify-content: center !important;

  .carousel__viewport {
    width: 100% !important;
    border-radius: 1rem;

    .carousel__track {
      height: 100%;
      padding-bottom: 2rem;
      margin-bottom: 1rem;

      .carousel__slide {
        border-radius: 1rem !important;
        padding: 0.5rem;
      }
    }
  }
}

.project__assets--item {
  @apply inset-0 h-full snap-center object-center object-cover rounded-lg;
}
</style>
