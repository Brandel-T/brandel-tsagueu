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

    <div class="container">
      <!-- <pre>{{ $route.params }}</pre> -->
      <div class="pt-10 mx-auto max-w-[55rem]">
        <div class="text-xs md:border-l-3 md:pl-3 w-fit mx-auto md:ml-0">
          <time>2025-03-28</time>
        </div>

        <h1 class="writting-title w-fit mx-auto md:ml-0 mb-8">My writting title</h1>

        <div>
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: false,
})
</script>

<style scoped>
.writting-title {
  font-family: oregano,"Fira code";
  font-weight: 600;
  font-size: 2rem;
}
</style>
