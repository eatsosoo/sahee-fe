export const useAuthStore = defineStore('auth', () => {
  const personalAccessToken = ref('')

  return {
    personalAccessToken,
  }
})
