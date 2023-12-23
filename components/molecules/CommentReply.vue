<template>
  <TransitionGroup name="list" tag="ul" class="mr-6 mt-2">
    <li v-for="(comment, index) in commentReplies" :key="comment.id" class="text-sm relative ml-3">
      <div
        v-if="comment.parent_id && index !== props.replies.length - 1"
        class="border-l-2 border-extra absolute left-[-1.8rem] top-[-1rem] h-full"
      ></div>
      <div
        v-if="comment.parent_id"
        class="border-l-2 border-b-2 border-extra w-7 h-8 absolute left-[-1.8rem] top-[-1rem] rounded-bl-[1rem] Content"
      ></div>

      <div class="flex">
        <div class="flex flex-col items-center w-8 shrink-0">
          <img
            class="rounded-full w-8 h-8"
            :src="comment.user_avatar_url"
            alt="commentator_avatar"
          />
        </div>
        <div class="w-full">
          <div
            @mouseover="state.actionCmtId = comment.id"
            @mouseleave="state.actionCmtId = -1"
            @mouseleave.stop
          >
            <div
              class="bg-extra rounded-[1.2rem] ml-2 py-2 px-4 relative"
              :style="`max-width: ${comment.content.length * 8.5}px; min-width: ${
                comment.user_name.length * 8.5
              }px`"
            >
              <p class="font-bold">{{ comment.user_name }}</p>
              <p class="">{{ comment.content }}</p>
              <div
                v-if="comment.reply && comment.reply.length > 0"
                class="border-l-2 border-extra absolute left-[-1.55rem] top-[2.4rem] h-[80%]"
              ></div>
              <div class="absolute right-[-1.5rem] h-full top-0 flex items-center">
                <div
                  v-if="state.actionCmtId === comment.id"
                  class="cursor-pointer hover:bg-primary rounded-full w-6 h-6 flex items-center justify-center"
                >
                  <font-awesome-icon icon="fa-solid fa-ellipsis" />
                </div>
              </div>
            </div>
          </div>
          <div class="text-xs ml-5">
            <span class="mr-2 hover:underline">{{ timeAgo(comment.created_at) }}</span>
            <span class="mr-2 hover:underline font-semibold cursor-pointer">Like</span>
            <span
              class="mr-2 hover:underline font-semibold cursor-pointer"
              @click="activeReply(comment.id)"
              >Reply</span
            >
            <div v-if="state.commentRootId === comment.id" class="my-1 relative">
              <Comment
                @keyup.enter="handleEnter($event, comment)"
                @comment="state.content = $event"
              ></Comment>
              <span
                v-if="state.commentRootId === comment.id && state.errorMessage"
                class="text-error"
              >
                {{ state.errorMessage }}
              </span>
              <div
                v-if="comment.reply && comment.reply.length > 0"
                class="border-l-2 border-extra absolute left-[-2.3rem] top-[0rem] h-full"
              ></div>
            </div>
          </div>

          <CommentReply :content="comment.content" :replies="comment.reply"></CommentReply>
        </div>
      </div>
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { type CommentItemType } from '@/components/molecules/News.vue'
import { timeAgo } from '@/utils/utils'
import { Methods, serviceApi } from '@/utils/api'

const props = defineProps({
  content: {
    type: String,
    default: '',
  },
  replies: {
    type: Object as PropType<CommentItemType[]>,
    default: () => [],
  },
})

const emits = defineEmits(['newComment'])
const commentReplies = ref(props.replies)
const state = reactive({
  actionCmtId: -1,
  commentRootId: -1,
  content: '',
  errorMessage: '',
})

const activeReply = (commentId: number) => {
  if (state.commentRootId !== -1 && state.commentRootId === commentId) {
    state.commentRootId = -1
  } else {
    state.commentRootId = commentId
  }
}

const handleEnter = async (event: any, replyComment: CommentItemType) => {
  if (event.shiftKey) {
    return
  }
  const { result, data } = await serviceApi(Methods.Post, `http://sahee/api/comments`, {
    content: state.content,
    user_id: 1,
    post_id: replyComment.post_id,
    parent_id: replyComment.id,
  })

  if (!result) {
    state.errorMessage = 'Something wrong. Please try again!'
  } else {
    commentReplies.value = commentReplies.value.map((replyItem: CommentItemType) => {
      if (replyItem.id === state.commentRootId) {
        replyItem.reply = [...replyItem.reply, data.comment]
      }
      return replyItem
    })

    state.content = ''
    state.commentRootId = -1
    state.errorMessage = ''
  }
}

watch(
  () => props.replies,
  () => {
    commentReplies.value = props.replies
  }
)
</script>
