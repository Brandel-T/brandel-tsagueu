<template>
  <div>
    <div class="hero-wrapper after:animate-pulse before:animate-pulse before:delay-200 before:duration-1000">
      <Hero id="hero" />
    </div>
    <div class="bg-gradient section">
      <Contact />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layoutTransition: true,
  pageTransition: true,
});
</script>

<style scoped>
@reference "../assets/styles/tailwind.css";

.hero-wrapper {
  overflow: hidden;
}
.hero-wrapper::after {
  content: "";
  width: 10rem;
  height: 15rem;
  border: 2px solid var(--primary);
  position: absolute;
  left: 50%;
  top: 45%;
  border-radius: 50%;
  background-image: var(--bg-gradient);
  background-size: 200%;
  filter: blur(130px) brightness(200%) contrast(1);
  animation: bg-animation 10s infinite alternate;
  border-radius: 50% 50% 42% 58% / 53% 24% 76% 47%;
  overflow: hidden;
}
.hero-wrapper::before {
  content: "";
  width: 10rem;
  height: 5rem;
  border: 4rem solid var(--primary);
  position: absolute;
  left: -10%;
  top: 35%;
  border-radius: 50%;
  filter: blur(300px);
}

@keyframes bg-animation {
  0% {
    background-position: left;
    background-size: 150%;
    top: 25%;
  }
  50% {
    background-size: 200%;
  }
  100% {
    background-position: right;
    background-size: 120%;
    top: 50%;
  }
}
</style>
