/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: '#030712',
      secondary: '#32ffac',
      tertiary: '#32FFAC2B',
      accent: '#AEC1F5',
      'accent-soft': '#AEC1F52B',
      background: '#202739',
    },
    extend: {
      colors: {
        'white': '#FEFEFE',
        'soft': '#9ca3af',
      }
    },
  },
  plugins: [],
}

