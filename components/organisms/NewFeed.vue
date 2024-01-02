<template>
  <div class="NewFeedList">
    <NewPost class="mb-4"></NewPost>

    <News
      v-for="post in posts"
      :value="post"
      :key="post.id"
      class="mb-4 pb-1"
      @open-comments="activeCommentDialog(post.id)"
    ></News>

    <NewsDetailDialog
      v-if="postTarget"
      :value="postTarget"
      :comments="comments"
      :open="state.activeCommentDialog"
      @on-close="state.activeCommentDialog = false"
    >
    </NewsDetailDialog>
  </div>
</template>

<script setup lang="ts">
import { Methods, serviceApi } from '@/utils/api'
import { type CommentItemType, type PostItemType } from '@/components/molecules/News.vue'

const posts = ref<PostItemType[]>([])
const comments = ref<CommentItemType[]>([])
const postTarget = ref<PostItemType | null>(null)

const state = reactive({
  activeCommentDialog: false,
})

const activeCommentDialog = (postId: number) => {
  postTarget.value = posts.value.find((post: PostItemType) => post.id === postId) as PostItemType
  state.activeCommentDialog = true
  getCommentsOfPost()
}

const getCommentsOfPost = async () => {
  if (!postTarget.value?.id) return []

  const res = await serviceApi(
    Methods.Get,
    `/comments?post_id=${postTarget.value.id}&sort={"field":"id","order":"DESC"}`
  )

  if (!res || !res.result) comments.value = []
  comments.value = handleCommentsTree(res.data.comments)
}

const getPosts = async () => {
  const res = await serviceApi(Methods.Get, '/posts?sort={"field":"id","order":"DESC"}')

  if (!res || !res.result) posts.value = []
  posts.value = res.data.posts
}

const handleCommentsTree = (commentOfPost: CommentItemType[]) => {
  const rootComments = commentOfPost.filter((comment) => comment.parent_id === null)

  const findDescendants = (rootId: number, list: CommentItemType[]) => {
    const descendants = list.filter((comment) => comment.parent_id === rootId)
    return descendants
  }

  const populateReplies = (comment: CommentItemType) => {
    const descendants = findDescendants(comment.id, commentOfPost)
    if (descendants.length > 0) {
      comment.reply = descendants
      descendants.forEach(populateReplies) // Recursively scan all child comments
    } else {
      comment.reply = []
    }
  }

  for (const rootComment of rootComments) {
    populateReplies(rootComment)
  }

  return rootComments
}

getPosts()
</script>
