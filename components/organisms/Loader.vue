<template>
    <Suspense>
        <template #default>
            <!-- <slot name="content"></slot> -->
            <NeedFeed></NeedFeed>
        </template>

        <template #fallback> <h1>Loading...</h1> </template>
    </Suspense>
</template>

<script setup lang="ts">
import NewFeed from '@/components/organisms/NewFeed.vue'
</script>
