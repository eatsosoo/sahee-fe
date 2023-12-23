<template>
  <div class="TextArea">
    <label v-if="props.label" :for="props.name">
      {{ props.label }}
    </label>
    <textarea
      ref="autosizeTextarea"
      class="py-2 px-2 rounded bg-field outline-outline border-outline border-[2px] w-full h-full"
      v-model="text"
      :class="`${props.resize}`"
      :placeholder="props.placeholder"
      @input="$emit('updateValue', text)"
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
  resize: {
    type: String as PropType<'resize-x' | 'resize-y' | 'resize-none' | 'resize'>,
    default: 'resize',
  },
  autosize: {
    type: Boolean,
    default: false,
  },
})

const autosizeTextarea = ref<HTMLTextAreaElement | null>(null)
const text = ref(props.value)

watch(text, () => {
  if (props.autosize) {
    resizeTextarea()
  }
})

const resizeTextarea = () => {
  const element = autosizeTextarea.value
  if (element) {
    element.style.height = 'auto'
    element.style.height = `${element.scrollHeight}px`
    element.style.maxHeight = '320px'
  }
}
</script>

<style lang="scss" scoped>
.TextArea {
  font-size: 14px;
  min-height: 40px;
  line-height: 1.7;
}
</style>
