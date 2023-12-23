<template>
    <div class="TextField">
        <label v-if="props.label" :for="props.name">
            {{ props.label }}
        </label>
        <input
            type="text"
            :value="props.value"
            class="py-2 px-2 rounded bg-field outline-outline border-outline border-[2px] w-full h-full"
            :placeholder="props.placeholder"
            @input="$emit('onChange', $event)"
        />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    label: {
        type: String,
        default: '',
    },
    value: {
        type: String,
        default: '',
    },
    placeholder: {
        type: String,
        default: '# Explore',
    },
})
</script>

<style lang="scss" scoped>
.TextField {
    font-size: 14px;
    min-height: 40px;
    line-height: 1.7;
}
</style>
