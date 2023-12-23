<template>
  <DialogWrapper :open="props.open" @on-close="$emit('onClose', true)">
    <div class="flex items-between flex-col max-h-[90vh] bg-white rounded-t overflow-hidden">
      <div class="grow border-extra border-b-[1px] py-4 max-h-[4.4rem]">
        <p class="font-bold text-[1.5rem] text-center">Post's {{ value.user_name }}</p>
      </div>

      <div class="grow-0 h-auto overflow-hidden overflow-y-scroll">
        <News :value="props.value">
          <template #comments>
            <div v-if="postReplies.length > 0" class="pb-2">
              <CommentReply :replies="postReplies"></CommentReply>
            </div>
            <div v-else class="pt-4 pb-6 flex justify-center items-center">
              <span>There are no comments yet, you are the first</span>
              <ChatLoading />
            </div>
          </template>
        </News>
      </div>

      <div class="grow bg-background">
        <Comment @keyup.enter="handleEnter" @comment="content = $event"></Comment>
        <ErrorLabel :message="error" class="ml-12 mb-2"></ErrorLabel>
      </div>
    </div>
  </DialogWrapper>
</template>

<script setup lang="ts">
import { type CommentItemType, type PostItemType } from '@/components/molecules/News.vue'
import { Methods, serviceApi } from '@/utils/api'

const props = defineProps({
  value: {
    type: Object as PropType<PostItemType>,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
  comments: {
    type: Array as PropType<CommentItemType[]>,
    default: () => [],
  },
})

const content = ref('')
const postReplies = ref(props.comments)
const error = ref('')

const handleEnter = async (event: any) => {
  if (event.shiftKey) {
    return
  }
  const { result, data } = await serviceApi(Methods.Post, `http://sahee/api/comments`, {
    content: content.value,
    user_id: 1,
    post_id: props.value.id,
    parent_id: null,
  })

  if (!result) {
    error.value = 'Something wrong. Please try again.'
    return
  }

  const { comment } = data
  content.value = ''
  error.value = ''
  postReplies.value = [...postReplies.value, comment]
}

watch(
  () => props.comments,
  () => {
    postReplies.value = props.comments
  }
)
</script>
