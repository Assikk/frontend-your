/** @type {import('tailwindcss').Config} */

// const remark = require('remark')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    // !"./components/test.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    // "!./pages/poster/_slug.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
