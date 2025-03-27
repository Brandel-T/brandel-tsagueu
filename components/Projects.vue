<template>
  <NuxtErrorBoundary>
    <section
      v-if="projectSection && !pending"
      id="projects"
      class="projects page-section container"
    >
      <SectionHeader :title="projectSection ? 'Projects' : projectSection.title" />

      <article class="section-body flex-row-reverse">
        <div class="flex-1">
          <div v-for="(project, index) in projectSection.projects" :key="index" class="accordion">
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
                <a v-if="isAccordionActive(index)" :href="project.url" target="_blank">
                  <div class="badge badge-soft">
                    <Icon name="devicon:github" mode="svg" class="size-6" />
                    View on GitHub ↗
                  </div>
                </a>
                <div class="badge badge-dash badge-accent">{{ project.type }}</div>
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
                  :breakpoint-mode="'carousel'"
                  :breakpoints="carouselBreakpoints"
                >
                  <Slide
                    v-for="(asset, assetIndex) in project.assets"
                    :key="asset"
                  >
                    <img
                      :key="asset"
                      class="project__assets--item"
                      :src="useRuntimeImage(asset.url)"
                      :alt="`Portfolio: Project ${project.title ?? 'bnfconf'} preview ${assetIndex}`"
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
                      <div class="badge badge-soft">
                        <Icon :name="tech.iconName" mode="svg" class="size-6" />
                        {{ tech.name }}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-header__container--desktop flex-1!">
          <div
            v-for="(project, index) in projectSection.projects"
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
                :href="project.url"
                target="_blank"
              >
                <div class="badge badge-soft">
                  <Icon name="devicon:github" mode="svg" class="size-6" />
                  View on GitHub ↗
                </div>
              </a>
              <div class="badge-outline">{{ project.type }}</div>
            </div>
          </div>
        </div>
      </article>
    </section>

    <template #error="{ error }">
      <p>An error occured while loading the <i>porfolio</i>.</p>
      <p>{{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<script lang="ts" setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const { find } = useStrapi();

const selectedProject = ref<number>(0);
const carouselSettings = ref({
  wrapAround: true,
  transition: 800,
  autoplay: 4000,
  itemsToShow: 1,
});
const carouselBreakpoints = ref({
  768: {
    itemsToShow: 2,
    snapAlign: "center",
  },
  1024: {
    itemsToShow: 1.2,
  },
});

const projectSection = ref();

const { data, pending } = useAsyncData(async () => {
  return await find("projects-section", {
    populate: {
      projects: {
        populate: "*",
      },
    },
  }).then(({ data }) => data);
});

watchEffect(() => {
  if (!data) return;
  projectSection.value = data.value;
});

watch(
  data,
  (value) => {
    if (value) {
      projectSection.value = data.value;
    }
  },
  { immediate: true },
);

function selectProject(accordionIndex: number) {
  selectedProject.value = accordionIndex;
}

function isAccordionActive(index: number) {
  return selectedProject.value === index;
}
</script>

<style scoped>
@reference "../assets/styles/tailwind.css";

.accordion-body {
  @apply flex flex-col;
}
.project__assets {
  @apply flex-1 flex h-full snap-mandatory snap-x overflow-x-scroll overflow-y-hidden;
}
.project__assets::-webkit-scrollbar {
  height: 0.5rem;
  border: 1px solid var(--accent);
  margin-top: 1rem;
  border-radius: 4rem;
  position: relative;
}

.project__assets::-webkit-scrollbar:after,
.project__assets::-webkit-scrollbar:before {
  content: "";
  display: block;
  width: 2rem;
  height: 100%;
  position: absolute;
}

.carousel {
  height: 100%;
  justify-content: center !important;
}

.carousel .carousel__viewport {
  height: 100%;
  border-radius: 0.5rem;
  background-color: var(--accent-soft);
}

.carousel .carousel__viewport .carousel__track {
  height: 100%;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
}

.carousel .carousel__viewport .carousel__track .carousel__slide {
  border-radius: 1rem !important;
  padding: 0.5rem;
}

@media screen and (min-width: 768px) {
  .carousel .carousel__viewport .carousel__track .carousel__slide:hover {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.project__assets--item {
  @apply inset-0 h-full snap-center object-center object-contain rounded-lg duration-200
    lg:object-cover lg:object-center md:hover:scale-105
}
</style>
