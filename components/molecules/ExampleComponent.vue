<template>
    <div class="grid grid-cols-4">
        <div
            v-for="(post, index) in props.value"
            :key="post.id"
            :class="`border-primary border-2 mb-6 ${
                (index + 1) % 4 === 0 ? 'mr-0' : 'mr-4'
            }`"
        >
            <Card>
                <div
                    class="mb-[3.5rem] rounded-t-lg h-24 bg-[url('https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg')] relative flex justify-center"
                >
                    <div class="absolute bottom-[-2.5rem]">
                        <img
                            src="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
                            alt="avatar"
                            class="h-[5rem] rounded-full"
                        />
                    </div>
                </div>
                <div class="text-center px-5 mb-4">
                    <h3 class="font-bold mb-1">
                        {{ post.title }}
                    </h3>
                    <p class="text-extra font-semibold text-sm mb-1">
                        @noritoshi
                    </p>
                    <p class="text-sm">
                        {{ post.title }}
                    </p>
                </div>
                <div class="flex border-t-[1px] border-b-[1px] border-extra">
                    <div
                        class="flex-1 text-center my-4 border-r-[1px] border-extra"
                    >
                        <p>{{ convertLikes(post.likes) }}</p>
                        <p class="text-sm text-extra">Likes</p>
                    </div>
                    <div
                        class="flex-1 text-center my-4 border-l-[1px] border-extra"
                    >
                        <p>{{ convertLikes(post.views) }}</p>
                        <p class="text-sm text-extra">Views</p>
                    </div>
                </div>
                <div class="flex justify-center items-center py-[0.8rem]">
                    <span
                        class="text-sm text-[#7dd3fc] cursor-pointer hover:text-blue-500 hover:font-semibold"
                        >View post</span
                    >
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import Card from "@/components/molecules/card/Card.vue";
import { convertLikes } from "@/utils/utils";

const props = defineProps({
    value: {
        type: Array,
        required: true,
    },
});
</script>
