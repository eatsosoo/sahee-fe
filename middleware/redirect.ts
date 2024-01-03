export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  const token = authStore.$getAccessToken()

  if (!token) {
    return navigateTo('/login')
  }
})
