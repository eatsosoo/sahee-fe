<template>
  <div class="LoginPage h-[100vh] grid grid-cols-2">
    <div class="flex flex-col justify-center items-centers bg-primary">
      <div class="mx-auto">
        <Card class="w-[28rem] p-5 bg-white">
          <p class="text-2xl text-center font-bold mb-4">Login to your Sahee</p>

          <form @submit="onSubmit">
            <TextField name="email" :errors-message="true" placeholder="Email" class="h-[4rem]" />

            <Password
              name="password"
              :errors-message="true"
              placeholder="Password"
              class="h-[4rem]"
            />

            <div class="text-center">
              <p class="text-right text-xs mb-2 cursor-pointer hover:underline hover:text-sky-400">
                Forgot password?
              </p>
              <button class="rounded-[1rem] px-16 py-2 bg-primary text-white mb-2">Sign In</button>
            </div>
          </form>
        </Card>
      </div>
    </div>

    <div class="bg-white m-auto">
      <img src="https://www.icegif.com/wp-content/uploads/2021/12/icegif-888.gif" alt="gif" />
    </div>
  </div>
</template>

<script setup lang="ts">
import * as Form from '@/components/molecules/form/form-components'
import * as yup from 'yup'
import { useForm } from 'vee-validate'

definePageMeta({
  layout: 'auth',
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<style lang="scss" scoped>
input[type='text'] {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
}
</style>
