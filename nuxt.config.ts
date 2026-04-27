// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: "Bilal Ahmed Mirza | Creative Lead & Full-Stack Designer",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Portfolio of Bilal Ahmed Mirza. High-conversion Full-Stack Creative Lead specializing in UI/UX, WordPress, Automation, and Digital Branding."
        },
        { name: "keywords", content: "Bilal Ahmed Mirza, Creative Lead, Full-Stack Designer, UI/UX Design, WordPress Developer, Automation Specialist, Portfolio" },
        { name: "author", content: "Bilal Ahmed Mirza" },
        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://mirza-bilal-portfolio.netlify.app/" },
        { property: "og:title", content: "Bilal Ahmed | Full-Stack Creative Lead" },
        { property: "og:description", content: "Creative Lead & Operations Manager specializing in high-impact digital experiences." },
        { property: "og:image", content: "https://mirza-bilal-portfolio.netlify.app/assets/images/about/me.jpg" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:url", content: "https://mirza-bilal-portfolio.netlify.app/" },
        { name: "twitter:title", content: "Bilal Ahmed | Full-Stack Creative Lead" },
        { name: "twitter:description", content: "Creative Lead & Operations Manager specializing in high-impact digital experiences." },
        { name: "twitter:image", content: "https://mirza-bilal-portfolio.netlify.app/assets/images/about/me.jpg" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "~/assets/css/animate.min.css",
    "~/assets/css/font-awesome-pro.css",
    "~/assets/fonts/remixicon.css",
    // REMOVED BROKEN FLATICON LINE
    "~/assets/css/spacing.css",
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
  ],

  modules: ["@nuxt/image"],
  build: {
    transpile: ["lucide-vue-next"]
  },
  compatibilityDate: "2026-02-11",
});