// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: "Bilal Ahmed Mirza | Creative Lead & Operations Manager",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { 
          name: "description", 
          content: "Portfolio of Bilal Ahmed Mirza. Full-Stack Creative & Operations Manager specializing in UI/UX, WordPress, and Automation." 
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/animate.min.css",
    "~/assets/css/font-awesome-pro.css",
    // REMOVED BROKEN FLATICON LINE
    "~/assets/css/spacing.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
  ],

  modules: ["@nuxt/image"],
  compatibilityDate: "2026-02-11",
});