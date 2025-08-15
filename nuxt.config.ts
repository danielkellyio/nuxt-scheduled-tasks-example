// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint"],

  runtimeConfig: {
    taskSecret: process.env.TASK_SECRET,
  },

  nitro: {
    experimental: {
      tasks: true,
    },
    routeRules: {
      "/about": {
        isr: true,
      },
    },
    // This won't work on Netlify yet...
    scheduledTasks: {
      "0 * * * *": ["example:record"], // run every hour
    },
  },
});
