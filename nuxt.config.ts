// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/fonts.css", "~/assets/css/style.css"],
  modules: ["@pinia/nuxt", "nuxt-swiper"],
});
