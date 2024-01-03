export const useAuthStore = defineStore('auth', () => {
  const personalAccessToken = ref<string>('')

  function $setAccessToken(token: string) {
    personalAccessToken.value = token
    sessionStorage.setItem('token', token)
  }

  function $getAccessToken() {
    return sessionStorage.getItem('token')
  }

  function $reset() {
    personalAccessToken.value = ''
    sessionStorage.clear()
  }

  return {
    personalAccessToken,

    $setAccessToken,
    $getAccessToken,
    $reset,
  }
})
