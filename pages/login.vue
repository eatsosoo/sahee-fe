<template>
  <Card class="py-4 px-6 w-96 bg-primary">
    <div>
      <p class="text-2xl text-center font-bold mb-4">Sign In</p>
      <Form.TextField :label="`Email`" :placeholder="''" class="mb-2"></Form.TextField>
      <Form.TextField :label="`Password`" :placeholder="''" class="mb-2"></Form.TextField>
      <div class="text-center pt-2">
        <p class="text-right text-xs mb-2 cursor-pointer hover:underline hover:text-sky-400">
          Forgot password?
        </p>
        <button class="w-full rounded px-4 py-2 bg-primary text-white mb-2">Login</button>
        <button class="w-full rounded px-4 py-2 border-primary bg-field border-2">Register</button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import * as Form from '@/components/molecules/form/form-components'

definePageMeta({
  layout: 'auth',
})
</script>
