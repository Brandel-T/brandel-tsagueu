import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: process.env.NODE_ENV === "development" },
  ssr: process.env.NODE_ENV === "production",
  runtimeConfig: {
    public: {
      apiUrl: process.env.NODE_ENV === "development"
          ? "http://localhost:1337"
          : process.env.STRAPI_URL,
    },
  },
  strapi: {
    url: process.env.NODE_ENV === "development"
        ? "http://localhost:1337"
        : process.env.STRAPI_URL,
    prefix: "/api",
  },
  modules: [
    // "@nuxtjs/tailwindcss",
    "@nuxtjs/strapi",
    "@nuxtjs/google-fonts",
    "vue3-carousel-nuxt",
  ],
  googleFonts: {
    families: {
      Inter: true,
      "JetBrains Mono": [300, 400],
      "Fira Code": [400],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/styles/tailwind.css"],
  plugins: [{ src: "~/plugins/aos.client.js", ssr: false }],
  build: {
    transpile: ["gsap"],
  },
  compatibilityDate: "2025-03-25",
});