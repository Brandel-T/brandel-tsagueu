// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
    runtimeConfig: {
    public: {
      apiUrl: process.env.STRAPI_URL,
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxt/content"],
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
    highlight: {
      theme: "github-light",
    },
  },
  imports: {
    dirs: ["composables/**"],
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["gsap"],
  },
});
