// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: "Bilal Ahmed | Digital Agency Owner & Designer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { 
          name: "description", 
          content: "Portfolio of Bilal Ahmed, Founder of Squares Tech. Expert in Graphic Design, Web Development, and Digital Automation." 
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/animate.min.css",
    "~/assets/css/font-awesome-pro.css",
    // REMOVED flaticon.css
    "~/assets/css/spacing.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
  ],
});