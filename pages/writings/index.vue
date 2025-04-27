<template>
  <Transition mode="in-out">
    <div class="min-h-screen flex flex-col">
      <header
        v-if="writingPage"
        class="writings-cover h-96 flex flex-col justify-center gap-6 items-center bg-[url(~/assets/images/blog-cover.jpg)] bg-cover relative isolate blog-cover"
      >
        <h1 class="blog-page-title mx-auto font-medium text-7xl text-white">{{ writingPage.title }}</h1>
        <p class="text-white! text-center w-56 md:w-fit">{{ writingPage.description }}</p>
      </header>

      <div class="container flex-1 flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 pt-10 pb-20">
        <NuxtLink
          v-if="writings?.length > 0"
          v-for="writing in writings"
          :key="writing.id"
          :to="`/writings/${writing.documentId}`"
          class="w-full md:w-[20rem] lg:w-[24rem] self-stretch items-stretch"
        >
          <div class="card bg-base-100 card-lg">
            <div class="card-body">
              <h2 class="card-title">{{ writing.title }}</h2>
              <p class="text-xs border-base-300 border-l-3 pl-3 mb-2">
                <time class="text-base-300">{{ useDateFormat(writing.createdAt) }}</time>
              </p>
              <p v-if="writing?.description">{{ writing?.description }}</p>
              <div class="flex gap-3 flex-wrap">
                <div
                  v-for="tag in writing.tags"
                  :key="tag.id"
                  class="badge badge-dash badge-secondary"
                >{{ tag.name }}</div>
              </div>
              <div class="justify-start card-actions">
                <button class="btn btn-ghost text-white font-normal">
                  Read more
                  <Icon name="ic:sharp-arrow-right-alt" mode="svg" />
                </button>
              </div>
            </div>
          </div> 
        </NuxtLink>
        <div
          v-else
          class="flex-1 grid content-stretch justify-stretch place-content-center"
        >
          <div class="flex-1 grid place-content-center">Nothing published yet 🙂.</div>
          <div class="flex-1"></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});

const { find } = useStrapi();
const writings = ref([])
const writingPage = ref()

useSeoMeta({
  ogTitle: () => writingPage ? capitalize(writingPage.value?.title) : "Writings",
  title: () => writingPage ? capitalize(writingPage.value?.title) : "Writings",
  ogImage: "~/assets/images/blog-cover.jpg",
  ogImageAlt: "Cover image of blog hero section",
  description: () => writingPage ? capitalize(writingPage.value?.description) : "I also write",
  ogDescription: () => writingPage ? capitalize(writingPage.value?.description) : "I also write",
  ogType: "website",
  ogUrl: "https://www.brande-tsagueu.dev/writings",
})

const { data } = useAsyncData<{ articles: Array<any>, page: any }>(async () => {
  return await Promise.all([
    find("writting-posts", { populate: '*' }).then(({ data }) => {
      return data as Array<any>
    }),
    find("writting").then(({ data }) => data)
  ]).then(([articles, page]) => ({ articles, page }))
});

watch(data, (value) => {
  if (value) {
    writings.value = data.value?.articles;
    writingPage.value = data.value?.page;
  }
}, { immediate: true });

function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}
</script>

<style scoped>
.blog-cover {
  background-color: var(--blog-bg-color-surface);

  &::before {
    content: "";  
    width: 100%;
    height: 100%;
    background: linear-gradient(75deg, var(--blog-bg-color) 15%, transparent);

    position: absolute;
    top: 0;
    left: 0;
  }
}

.blog-page-title {
  font-family: Oregano;
}

.card:hover {
  background-color: var(--blog-bg-color-surface) !important;
  cursor: pointer;
}
.card {
  background-color: var(--blog-bg-color);
}
</style>