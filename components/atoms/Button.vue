<template>
    <button
        class="px-8 py-2 rounded-full font-semibold"
        :class="`bg-button text-${props.text}`"
    >
        {{ props.title }}
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        title: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: "secondary",
        },
        space: {
            type: String,
            default: "px-8 py-2",
        },
        text: {
            type: String,
            default: "white",
        },
    },

    setup(props) {
        return {
            props,
        };
    },
});
</script>
