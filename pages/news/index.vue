<template>
  <ThreeColumn>
    <template #left></template>
    <template #center>
      <NewFeed :posts="posts"></NewFeed>
    </template>
    <template #right></template>
  </ThreeColumn>
</template>

<script setup lang="ts">
import type { PostItemType } from '@/components/molecules/News.vue'
import { useApi, type ResponseResultType } from '@/composable/useApiFetch'

const posts = ref<PostItemType[]>([])

const getPosts = async () => {
  const { api } = useApi(undefined, 'GET', null, undefined)
  const { data: responseData } = await api<ResponseResultType>('/posts')
  if (!responseData) {
    posts.value = []
  }

  if (responseData.value) {
    const { data } = responseData.value
    posts.value = data.posts
  }
}

getPosts()
</script>
