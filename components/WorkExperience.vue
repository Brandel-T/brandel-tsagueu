<script lang="ts">
import {PropType} from "@vue/runtime-core";
import {JobType} from "~/utils/models";
import {useDateFormat} from "~/components/composables/utils";

export default {
    methods: {useDateFormat},
    props: {
        jobs: { type: Object as PropType<JobType[]>, required: true }
    },
    setup() {
        const selectedJob = ref<number>(0)
        function selectJob(accordionIndex: number) {
            selectedJob.value = accordionIndex;
            console.log(accordionIndex)
        }
        return { selectedJob, selectJob }
    }
}
</script>

<template>
  <section class="work-experience page-section">
      <SectionHeader title="Work experience" />
      <div class="section-body">
          <div>
              <div
                  class="accordion"
                  v-for="(job, index) in jobs" :key="job.startDate"
              >
                  <div
                      :class="{'accordion-open': selectedJob === index, 'accordion-close': selectedJob !== index}"
                      class="accordion-header"
                      @click="selectJob(index)"
                  >
                      <span :class="{'text-accent': selectedJob == index}">{{ job.title }}</span>
                      <IconPlus v-if="!(selectedJob === index)" />
                      <IconMinus v-else class="icon-secondary-accent" />
                  </div>
                  <div v-if="selectedJob === index"
                       :class="{'hidden': !(selectedJob === index)}"
                       class="accordion-body transition-all duration-300 ease-in"
                  >
                      <div class="mb-6 mt-4">
                          <div class="body-text">
                          <span class="small flex items-center gap-2">
                              <IconCalendar class="!h-5 !w-5 icon-gray" />
                              {{ useDateFormat(job.startDate) }} - {{ useDateFormat(job.endDate) }}</span>
                          </div>
                          <div class="heading-1 ">{{ job.company }}</div>
                          <div  class="flex items-center gap-2 text-white font-light text-base">
                              <IconTime class="!h-6 !w-6" />
                              {{ job.workFormat }} <span class="text-secondary">/</span> {{ job.locationFormat }}</div>
                      </div>
                      <div class="mb-4">
                          <div class="body-text mb-4">{{ job.description }}</div>
                          <div class="highlight">Requirements</div>
                          <div class="body-text">
                              <ul class="list-disc pl-4">
                                  <li v-for="(requirement, index) in job.requirements"
                                      :key="index"
                                      class="body-text"
                                  >{{ requirement }}</li>
                              </ul>
                          </div>
                      </div>
                      <div class="">
                          <div class="highlight mb-2">Technologies used</div>
                          <div class="body-text">
                              <ul class="flex flex-wrap gap-2 justify-center md:justify-start">
                                  <li v-for="(tech, index) in job.techStack"
                                      :key="index"
                                      class="badge"
                                  >{{ tech }}</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="accordion-header__container--desktop">
              <div
                  v-for="(job, index) in jobs" :key="job.startDate"
                  :class="{'accordion-open': selectedJob === index, 'accordion-close': selectedJob !== index}"
                  class="accordion-header"
                  @click="selectJob(index)"
              >
                  <span :class="{'text-accent': selectedJob == index}">{{ job.title }}</span>
                  <IconPlus v-if="!(selectedJob === index)" />
                  <IconMinus v-else class="icon-secondary-accent" />
              </div>
          </div>
      </div>
  </section>

</template>

<style scoped lang="scss">
.accordion {
  @apply flex flex-col mb-2 lg:border-t lg:border-accent-soft lg:rounded-lg lg:shadow-md lg:shadow-accent-soft
}
.accordion-open {
  @apply bg-accent-soft text-accent
}
.accordion-close {
    @apply outline outline-1 outline-accent-soft
}
.accordion-header {
  @apply flex justify-between items-center rounded py-5 px-4
    hover:cursor-pointer hover:opacity-75
}
.accordion .accordion-header {
    @apply lg:hidden
}
.accordion-body {
    @apply px-4 mb-4 shadow
    lg:flex-1
}
:deep(.section-body) {
    @apply lg:flex lg:gap-4
}
.accordion-header__container--desktop {
    @apply flex-1 basis-2/4 hidden lg:block;
}
.accordion-header__container--desktop .accordion-header {
    @apply mb-2 w-full
}
</style>