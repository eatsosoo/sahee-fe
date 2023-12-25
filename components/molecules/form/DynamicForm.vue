<template>
  <Form>
    <div v-for="field in props.schema.fields" :key="field.name">
      <label :for="field.name">{{ field.label }}</label>
      <Field
        :as="field.as"
        :id="field.name"
        :name="field.name"
        class="py-2 px-2 rounded bg-field outline-outline border-outline border-[2px] w-full h-full"
      />
    </div>

    <slot name="decisionArea"></slot>
  </Form>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate'

const props = defineProps({
  schema: {
    type: Object,
    required: true,
  },
})
</script>
