<template>
  <NuxtLayout name="writting">
    <template #breadcrumbs>
      <div class="breadcrumbs text-lg">
        <ul>
          <li>
            <NuxtLink to="/">
              <Icon name="carbon:home" mode="svg" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/writtings">writtings</NuxtLink>
          </li>
        </ul>
      </div>
    </template>

    <div class="container md:mx-auto">
      <div class="text-xs md:border-l-3 md:pl-3 w-fit mx-auto md:ml-0">
        <time>2025-03-28</time>
      </div>

      <h1 v-if="writting" class="writting-title w-fit mx-auto md:ml-0 mb-8">
        {{ writting?.title ?? "My writting title" }}
      </h1>
      <p class="flex gap-2">
        <span
          v-for="tag in writting.tags"
          :key="tag.id"
          class="badge badge-soft badge-info"
        ><span class="tag-hasgtag">#</span> {{ tag.name }}</span>
      </p>

      <div v-if="writting" class="md-content">
        <MDC :value="writting?.content || ''" class="text-wrap!" />
      </div>
      <div v-else>Loading...</div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
});

useSeoMeta({
  ogTitle: "",
  title: "",
  ogUrl: "https://www.brande-tsagueu.dev/writtings/::ID::",
  articleAuthor: ["Brandel Tsagueu"],
  articleTag: [],
  articlePublishedTime: "",
  articleModifiedTime: "",
})

const route = useRoute()
const { findOne } = useStrapi()

const writting = ref({})

const { data } = await useAsyncData(
  'writting',
  () => findOne('writting-posts', route.params.id as string, { populate: '*' })
)

watch(data, (value) => {
  if (value) {
    writting.value = data.value?.data || {} as any
  }
}, { immediate: true });
</script>

<style scoped lang="scss">
.writting-title {
  font-family: oregano,"Fira code";
  font-weight: 600;
  font-size: 2rem;
}

.md-content {
  $vertical-gap: 1rem;

  * {
    text-wrap: wrap;
  }

  :deep(ul) {
    margin-top: $vertical-gap;
    margin-left: 1rem;
    
    li {
      list-style: circle;
    }
  }
  
  :deep(ol) {
    margin-top: $vertical-gap;
    margin-left: 1rem;
    
    li {
      list-style: decimal;
    }
  }

  :deep(pre) {
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    
    margin-top: $vertical-gap;
    margin-bottom: $vertical-gap;
  }
  
  :deep(code) {
    margin-top: $vertical-gap;
    margin-bottom: $vertical-gap;

    * {
      font-family: 'Fira code';
    }
  }
  
  :deep(blockquote) {
    padding-left: 1rem;
    margin-top: $vertical-gap;
    margin-bottom: $vertical-gap;
    border-left: 0.5rem solid var(--blog-bg-color-surface);
    background-color:  var(--color-base-100);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  :deep(p) {
    margin-bottom: 0.5rem;
    margin-top: 0.7rem;

    img {
      max-height: 40rem;
      margin-inline: auto;
      object-fit: cover;
      aspect-ratio: 16/9;
      margin-top: $vertical-gap;
      margin-bottom: $vertical-gap;
      border-radius: 0.5rem;
    }

    a {
      color: var(--color-accent);

      &:hover {
        color: var(--color-primary);
      }
    }
  }

  :deep(h1) {
    margin-top: $vertical-gap * 2.5;
    font-weight: 600;
    font-size: 2rem;
    font-family: Inter;
  }
  
  :deep(h2) {
    margin-top: $vertical-gap * 2;
    font-weight: bold;
    font-size: 1.6rem;
    font-family: Inter;
    color: var(--color-neutral);
  }
  
  :deep(h3) {
    margin-top: $vertical-gap;
    margin-bottom: $vertical-gap;
    font-weight: 400;
    font-style: italic;
    font-size: 1.4rem;
    font-family: Inter;
    color: var(--color-neutral-content);
  }
}
</style>
