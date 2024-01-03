<template>
  <header class="header h-32 bg-white">
    <div class="container mx-auto h-full">
      <div class="flex justify-between items-center h-full">
        <div><Form.TextField></Form.TextField></div>
        <div class="flex">
          <div class="py-4 font-semibold cursor-pointer hover:bg-background rounded">
            <NuxtLink to="/news" class="px-8 py-4">New Feeds</NuxtLink>
          </div>
          <div class="py-4 font-semibold cursor-pointer hover:bg-background rounded">
            <NuxtLink to="/" class="px-8 py-4">Posts</NuxtLink>
          </div>
          <div class="py-4 font-semibold cursor-pointer hover:bg-background rounded">
            <NuxtLink to="/" class="px-8 py-4">Tools</NuxtLink>
          </div>
          <div class="py-4 font-semibold cursor-pointer hover:bg-background rounded">
            <NuxtLink to="/" class="px-8 py-4">Blogs</NuxtLink>
          </div>
          <div class="py-4 font-semibold cursor-pointer hover:bg-background rounded">
            <NuxtLink to="/" class="px-8 py-4">Watch</NuxtLink>
          </div>
        </div>

        <div>
          <NuxtLink to="/login">
            <button class="rounded px-8 py-2 bg-primary text-white mr-2">Sign In</button>
          </NuxtLink>

          <button class="rounded px-8 py-2 bg-extra text-extra-1000" @click="logout">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import * as Form from '@/components/molecules/form/form-components'
import { useApi, type ResponseResultType } from '@/composable/useApiFetch'

const authStore = useAuthStore()

const logout = async () => {
  const token = authStore.$getAccessToken()
  const { api } = useApi(undefined, 'GET', token)
  const { status } = await api<ResponseResultType>('/logout')

  if (status.value === 'success') {
    authStore.$reset()
    navigateTo('/login')
  }
}
</script>
