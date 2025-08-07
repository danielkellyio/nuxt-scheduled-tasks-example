// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],
  nitro: {
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      "* * * * *": ["example:record"], // run every minute
    },
  },
});
