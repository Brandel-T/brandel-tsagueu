// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
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
    "@nuxtjs/google-fonts",
  ],
  strapi: {
    url:
      process.env.STRAPI_URL ||
      process.env.BACKEND_URL ||
      "http://localhost:1337",
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
  googleFonts: {
    families: {
      Inter: true,
      "JetBrains Mono": [300, 400],
      "Fira Code": [400],
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
