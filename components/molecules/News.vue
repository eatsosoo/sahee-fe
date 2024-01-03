<template>
  <Card>
    <div class="News">
      <div class="p-4 pb-0">
        <div class="flex items-center">
          <div class="w14 mr-2">
            <img :src="props.value.user_avatar_url" alt="avatar" class="w-10 h-10 rounded-full" />
          </div>
          <div>
            <div class="flex">
              <span class="mr-2">{{ props.value.user_name }}</span>
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span class="text-[0.8rem] text-extra font-semibold">{{ props.value.tag_name }}</span>
            </div>
            <div>
              <p class="text-[0.8rem] text-sub font-medium">
                {{ timeAgo(props.value.created_at) }}
              </p>
            </div>
          </div>
        </div>
        <p class="text-sm my-3">
          {{ props.value.content }}
        </p>
        <div class="flex text-[0.8rem] items-center justify-between mb-2">
          <div class="flex items-center">
            <font-awesome-icon icon="fa-solid fa-heart" class="text-primary h-4 w-4 mr-1" />
            <span class="text-sub">{{ convertLikes(props.value.likes) }}</span>
          </div>
          <div class="text-sub">{{ convertLikes(props.value.comment_total) }} comments</div>
        </div>
        <div class="flex py-2 border-t-[1px] border-b-[1px] border-primary mb-3">
          <button
            class="flex-1 rounded-lg py-2 mr-2 text-primary hover:bg-primary hover:text-white outline-white"
          >
            <font-awesome-icon icon="fa-solid fa-heart" />
            <span class="text-sm ml-2">Like</span>
          </button>
          <button
            class="flex-1 rounded-lg py-2 mx-2 text-primary hover:bg-primary hover:text-white outline-white"
            @click="$emit('open-comments')"
          >
            <font-awesome-icon icon="fa-solid fa-comment-dots" />
            <span class="text-sm ml-2">Comments</span>
          </button>
          <button
            class="flex-1 rounded-lg py-2 ml-2 text-primary hover:bg-primary hover:text-white outline-white"
          >
            <font-awesome-icon icon="fa-solid fa-share-nodes" />
            <span class="text-sm ml-2">Share</span>
          </button>
        </div>

        <slot name="comments"></slot>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/molecules/card/Card.vue'

export interface PostItemType {
  id: number
  title: string
  tag_name: string
  content: string
  likes: number
  comment_total: number
  user_name: string
  user_avatar_url: string
  created_at: string
  updated_at: string
}

export interface CommentItemType {
  id: number
  content: string
  parent_id: number
  post_id: number
  user_name: string
  user_avatar_url: string
  reply: CommentItemType[]
  created_at: string
  updated_at: string
}

const props = defineProps({
  value: {
    type: Object as PropType<PostItemType>,
    required: true,
  },
})
</script>
