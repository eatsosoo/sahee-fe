<template>
    <Transition>
        <div v-if="$props.message" class="text-error text-xs">
            <font-awesome-icon icon="fa-solid fa-circle-exclamation" class="text-error mr-1" />
            <span>{{ props.message }}</span>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const props = defineProps({
    message: {
        type: String,
        default: '',
    },
})
</script>
