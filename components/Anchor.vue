<template>
    <div
        class="link relative hover:cursor-pointer w-fit"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
    >
        <div class="flex flex-col-reverse items-center gap-1 w-fit">
            <span class="w-fit mb-1">
                <span v-if="type === 'internal'" class="hashtag">#</span>
                <span class="text-slate-400 text-xl sm:text-2xl md:text-3xl font-light mr-2">{{ name }}</span>
                <span
                    v-if="type === 'external'"
                    class="font-bold text-xl sm:text-2xl md:text-3xl"
                    :class="{'translate-x-1 -translate-y-1': hover}"
                >↗</span>
            </span>
            <span class="underline"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from "@vue/runtime-core";
import {IconHashtag, IconLinks} from "#components";

type LinkType = 'external' | 'internal';
export default {
    components: { IconLinks, IconHashtag },
    props: {
        type: { type: String as PropType<LinkType>, default: 'internal'},
        name: { type: String, required: true },
    },
    setup() {
        const hover = ref<boolean>(false)
        return { hover }
    }
}
</script>

<style scoped lang="scss">
.underline {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    background-color: $text-color;
    transition: width 0.5s ;
}
.link:hover .underline {
    border: none;
    width: 100%;
}

:deep(.icon) {
    svg {
        color: red !important;
        background-color: red;
    }
}
</style>