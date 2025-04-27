<template>
  <Transition mode="in-out">
    <div class="min-h-screen flex flex-col">
      <header
        v-if="writtingPage"
        class="writtings-cover h-96 flex flex-col justify-center gap-6 items-center bg-[url(~/assets/images/blog-cover.jpg)] bg-cover relative isolate blog-cover"
      >
        <h1 class="blog-page-title mx-auto font-medium text-7xl text-white">{{ writtingPage.title }}</h1>
        <p class="text-white! text-center w-56 md:w-fit">{{ writtingPage.description }}</p>
      </header>

      <div class="container flex-1 flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4 pt-10 pb-20">
        <NuxtLink
          v-if="writtings?.length > 0"
          v-for="writting in writtings"
          :key="writting.id"
          :to="`/writtings/${writting.documentId}`"
          class="w-full md:w-[20rem] lg:w-[24rem] self-stretch items-stretch"
        >
          <div class="card bg-base-100 card-lg">
            <div class="card-body">
              <h2 class="card-title">{{ writting.title }}</h2>
              <p class="text-xs border-base-300 border-l-3 pl-3 mb-2">
                <time class="text-base-300">{{ useDateFormat(writting.createdAt) }}</time>
              </p>
              <p v-if="writting?.description">{{ writting?.description }}</p>
              <div class="flex gap-3 flex-wrap">
                <div
                  v-for="tag in writting.tags"
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
const writtings = ref([])
const writtingPage = ref()

useSeoMeta({
  ogTitle: () => writtingPage ? capitalize(writtingPage.value?.title) : "Writtings",
  title: () => writtingPage ? capitalize(writtingPage.value?.title) : "Writtings",
  ogImage: "~/assets/images/blog-cover.jpg",
  ogImageAlt: "Cover image of blog hero section",
  description: () => writtingPage ? capitalize(writtingPage.value?.description) : "I also write",
  ogDescription: () => writtingPage ? capitalize(writtingPage.value?.description) : "I also write",
  ogType: "website",
  ogUrl: "https://www.brande-tsagueu.dev/writtings",
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
    writtings.value = data.value?.articles;
    writtingPage.value = data.value?.page;
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