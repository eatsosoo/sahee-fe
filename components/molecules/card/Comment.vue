<template>
    <div class="pt-2 px-2 bg-background rounded">
        <div class="flex">
            <div class="flex flex-col items-center w-8 shrink-0">
                <img
                    class="rounded-full w-8 h-8"
                    :src="'https://img.freepik.com/premium-photo/illustration-beautiful-woman-with-brown-hair_893012-188441.jpg'"
                    alt="commentator_avatar"
                />
            </div>
            <div class="w-full mx-2">
                <Form.TextArea
                    class="w-full"
                    :placeholder="'What do you think?'"
                    :resize="'resize-none'"
                    :autosize="true"
                    @update-value="$emit('comment', $event)"
                ></Form.TextArea>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import * as Form from '@/components/molecules/form/form-components'

const emits = defineEmits(['comment'])
</script>
