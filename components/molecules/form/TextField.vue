<template>
  <div class="TextField">
    <label v-if="props.label" :for="props.name">
      {{ props.label }}
    </label>
    <input
      type="text"
      v-model="value"
      class="py-1 px-3 rounded bg-field outline-outline border-outline border-[1px] w-full"
      :placeholder="props.placeholder"
      @input="$emit('updateValue', value)"
    />
    <ErrorLabel v-if="props.errorsMessage" :message="errorMessage"></ErrorLabel>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
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
    default: '',
  },
  errorsMessage: {
    type: Boolean,
    default: false,
  },
})

const { value, errorMessage } = useField(() => props.name)
</script>

<style lang="scss" scoped>
.TextField {
  font-size: 14px;
  min-height: 40px;
  line-height: 1.7;
}
</style>
