<template>
  <div class="min-h-screen">
    <header class="h-96 flex flex-col justify-center gap-6 items-center bg-[url(~/assets/images/blog-cover.jpg)] bg-cover relative isolate blog-cover">
      <h1 class="blog-page-title mx-auto font-medium text-7xl text-white">Writtings</h1>
      <p class="text-white! text-center w-56 md:w-fit">Here I share what I'm learning and other things that are important to me.</p>
    </header>
    <div class="container flex flex-wrap gap-2 md:gap-4 pt-10 pb-20">
      <NuxtLink v-for="i in 5" :to="`/writtings/${i}`">
        <div class="card w-96 bg-base-100 card-md shadow-sm">
          <div class="card-body">
            <h2 class="card-title">Medium Card</h2>
            <p class="text-xs border-base-300 border-l-3 pl-3 mb-2">
              <time class="text-base-300">2025-03-20</time>
            </p>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="justify-start card-actions">
              <button class="btn btn-ghost font-normal text-primary-content!">
                Read more
                <Icon name="ic:sharp-arrow-right-alt" mode="svg" />
              </button>
            </div>
          </div>
        </div> 
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.blog-cover::before {
  content: "";  
  width: 100%;
  height: 100%;
  /* z-index: 10; */
  background: linear-gradient(75deg, var(--blog-bg-color) 15%, transparent);

  position: absolute;
  top: 0;
  left: 0;
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