<template>
    <Card class="p-4">
        <div class="flex border-primary border-b-[1px] pb-3">
            <div class="flex flex-col items-center w-10 shrink-0">
                <img
                    class="rounded-full w-10 h-10"
                    :src="'https://img.freepik.com/premium-photo/illustration-beautiful-woman-with-brown-hair_893012-188441.jpg'"
                    alt="commentator_avatar"
                />
            </div>
            <div class="w-full ml-2">
                <div
                    class="bg-extra h-10 rounded-full flex items-center px-4 text-extra-1000 hover:bg-extra-1000 hover:text-white cursor-pointer transition ease-in-out delay-80"
                >
                    What are you thinking?
                </div>
            </div>
        </div>
    </Card>
</template>

<script setup lang="ts">
import Card from '@/components/molecules/card/Card.vue'
</script>
