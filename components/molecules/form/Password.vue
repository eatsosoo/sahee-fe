<template>
  <div class="PasswordField relative">
    <label v-if="props.label" :for="props.name">
      {{ props.label }}
    </label>
    <input
      :type="`${!hidden ? 'password' : 'text'}`"
      v-model="value"
      class="py-1 pl-2 pr-8 rounded bg-field outline-outline border-outline border-[1px] w-full"
      :placeholder="props.placeholder"
      @input="$emit('updateValue', value)"
    />

    <font-awesome-icon
      :icon="`fa-solid ${!hidden ? 'fa-eye' : 'fa-eye-slash'}`"
      class="absolute top-[0.6rem] right-[0.5rem] float-right cursor-pointer text-primary"
      @click="hidden = !hidden"
    />

    <ErrorLabel v-if="props.errorsMessage" :message="errorMessage"></ErrorLabel>
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
    default: '',
  },
  errorsMessage: {
    type: Boolean,
    default: false,
  },
})

const hidden = ref(false)

const { value, errorMessage } = useField(() => props.name)
</script>

<style lang="scss" scoped>
.PasswordField {
  font-size: 14px;
  min-height: 40px;
  line-height: 1.7;
}
</style>
