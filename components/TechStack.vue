<script lang="ts">
import {PropType} from "@vue/runtime-core";
import {TechStackType} from "~/utils/models";

export default {
    props: {
        recentTechnologies: { type: Array<String>, required: true },
        items: { type: Array<TechStackType>, required: true }
    }
}
</script>

<template>
<div class="tech-stack page-section">
    <SectionHeader title="Tech Stack" />
    <div class="section-body flex flex-col items-center justify-center">
        <div class="text mb-8 md:mb-12">
            Recently worked with:
            <span class="highlight"
                v-for="(recent, index) in recentTechnologies"
                :key="recent">
                {{ recent }}
                <span v-if="index == recentTechnologies.length-2">and </span>
                <span v-if="index < recentTechnologies.length-2">, </span>
            </span>
        </div>

        <div class="bg-background rounded p-6 h-fit w-full mb-2"
            v-for="(item, index) in items"
            :key="item.category">
            <div class="flex items-end justify-between" :class="{'flex-row-reverse': item % 2 == 1}">
                <span class="heading-2">{{item.category}}</span>
                <IconBackend v-if="item.category === 'Backend'" class="icon-secondary !h-12 !w-12" />
                <IconDesktop v-else-if="item.category === 'Frontend'" class="icon-secondary !h-12 !w-12" />
                <IconSettings v-else class="icon-secondary !h-12 !w-12" />
            </div>

            <div class="mt-4 flex flex-wrap gap-4">
                <span class="body-text !text-accent" v-for="tech in item.technologies" :key="tech">{{tech}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>