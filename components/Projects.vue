<script lang="ts">
import {PropType} from "@vue/runtime-core";
import {ProjectType} from "~/utils/models";
import {useDateFormat, useImage} from "~/components/composables/utils";

export default {
    methods: {useImage, useDateFormat},
    props: {
        projects: {
            type: Array<ProjectType>,
            required: true,
        }
    },
    setup() {
        const selectedProject = ref<number>(0)
        function selectProject(accordionIndex: number) {
            selectedProject.value = accordionIndex;
        }
        return { selectedProject, selectProject }
    }
}
</script>

<template>
<section class="projects page-section ">
    <SectionHeader title="Projects" />
    <div class="section-body flex-row-reverse">
        <div class="flex-1">
            <div
                class="accordion"
                v-for="(project, index) in projects"
                :key="index">
                <div
                    :class="{'accordion-open': selectedProject === index, 'accordion-close': selectedProject !== index}"
                    class="accordion-header"
                    @click="selectProject(index)"
                >
                    <span :class="{'text-accent': selectedProject == index}">{{ project.title }}</span>
                    <!-- <IconPlus v-if="!(selectedProject === index)" />
                    <IconMinus v-else class="icon-secondary-accent" /> -->
                    <div class="badge-outline">{{ project.type }}</div>
                </div>
                <div v-if="selectedProject === index"
                    :class="{'hidden': !(selectedProject === index)}"
                    class="accordion-body transition-all duration-300 ease-in"
                >
                    <div class="mb-4">
                        <div class="highlight mx-auto mt-6 w-fit">Description</div>
                        <div class="body-text mb-4 mx-auto w-fit">{{ project.description }}</div>
                    </div>
                    <div class="h-96">
                        <div class="project__assets">
                            <img
                                class="project__assets--item"
                                v-for="(asset, index) in project.assets"
                                :key="index"
                                :src="asset"
                                alt=""
                            >
                        </div>
                        <!-- <img
                            :src="String(useImage(project.asset))"
                            alt="project asset image"
                            class="rounded mx-auto"
                        /> -->
                    </div>
                    <div class="">
                        <div class="highlight mb-2 mx-auto mt-4 w-fit">Technologies used</div>
                        <div class="body-text w-fit mx-auto">
                            <ul class="flex flex-wrap gap-2 justify-center md:justify-start">
                                <li v-for="(tech, index) in project.technologies"
                                    :key="index"
                                    class="badge"
                                >{{ tech }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="accordion-header__container--desktop !flex-1">
            <div v-for="(project, index) in projects" :key="index"
                :class="{'accordion-open': selectedProject === index, 'accordion-close': selectedProject !== index}"
                class="accordion-header"
                @click="selectProject(index)"
            >
                <span :class="{'text-accent': selectedProject == index}">{{ project.title }}</span>
                <div class="badge-outline">{{ project.type }}</div>
            </div>
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>
.accordion-body {
    @apply flex flex-col
}
.project__assets {
    @apply flex-1 flex h-full snap-mandatory snap-x overflow-x-scroll overflow-y-hidden
}
.project__assets::-webkit-scrollbar {
    height: 0.5rem;
    border: 1px solid $accent;
    margin-top: 1rem;
    border-radius: 4rem;
    position: relative;

    &::after,
    &::before {
        content: '';
        display: block;
        width: 2rem;
        height: 100%;
        position: absolute;
    }
}

.project__assets--item {
    @apply inset-0 h-full snap-center mr-2 mb-4
}
</style>