<template>
  <div class="LoginPage h-[100vh] grid grid-cols-2">
    <div class="flex flex-col justify-center items-centers bg-primary">
      <div class="mx-auto">
        <Card class="w-[28rem] p-5 bg-white flex flex-col items-center">
          <p class="text-2xl text-center font-bold mb-4">
            Login to your Sahee {{ object.id.value + 1 }}
          </p>

          <form @submit="onSubmit" class="w-[22rem]">
            <TextField name="email" :errors-message="true" placeholder="Email" class="h-[3.5rem]" />

            <Password
              name="password"
              :errors-message="true"
              placeholder="Password"
              class="h-[4rem]"
            />

            <div class="text-center">
              <div class="text-right mb-2">
                <NuxtLink to="/" class="text-xs cursor-pointer hover:underline hover:text-sky-400">
                  Forgot password?
                </NuxtLink>
              </div>
              <Button :title="'Sign In'" class="w-48"></Button>
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
import { useApi, type ResponseResultType } from '@/composable/useApiFetch'

definePageMeta({
  layout: 'auth',
})

useHead({
  title: 'Login Page',
})

const errorMessage = ref('')
const object = { id: ref(1) }
const authStore = useAuthStore()

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
})

const onSubmit = handleSubmit(async (values) => {
  const { api } = useApi(undefined, 'POST', null, values)
  const { data, error } = await api<ResponseResultType>('/login')

  if (error.value || !data.value) {
    errorMessage.value = parseErrorMessage(error.value?.data)
    return
  }

  const { token } = data.value.data
  authStore.$setAccessToken(token)

  await navigateTo('/')
})
</script>
