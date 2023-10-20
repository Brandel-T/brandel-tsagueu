// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiUrl: process.env.STRAPI_URL,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxt/content",
    "nuxt-lenis",
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
  },
  tailwindcss: {
    cssPath: "~/assets/styles/main.scss",
    configPath: "tailwind.config",
    exposeConfig: true,
  },
  content: {
    contentHead: false,
    highlight: {
      theme: "github-light",
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/_colors.scss" as *;',
        },
      },
    },
  },
  plugins: [{ src: "~/plugins/aos.client.js", ssr: false }],
  build: {
    transpile: ["gsap"],
  },
});
