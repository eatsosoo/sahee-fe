<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="props.open"
        class="DialogContent fixed top-0 left-0 flex items-center justify-center"
      >
        <div ref="modalRef" class="Content" :style="`width: ${width}px`">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useOnClickOutside } from '@/composable/useOnClickOutside'

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 1000,
  },
})

const emit = defineEmits(['onClose'])

const modalRef = ref<HTMLElement | null>(null)

useOnClickOutside(modalRef, () => {
  if (!props.open) return

  emit('onClose')
})
</script>

<style lang="scss" scope>
.DialogContent {
  width: 100%;
  height: 100%;
  outline: none;
  background-color: rgba($color: #000000, $alpha: 0.4);
}
.Content {
  max-width: 1000px;
}
</style>
