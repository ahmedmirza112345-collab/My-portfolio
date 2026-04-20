export default defineNuxtRouteMiddleware((to) => {
  if (to.path !== '/' && !to.path.startsWith('/blog') && !to.path.startsWith('/single-project')) {
    return navigateTo('/')
  }
})
