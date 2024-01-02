type ResponseResultType = {
  version: string
  data: { [key: string]: any }
  result: boolean
}

export const useApi = (
  query: Object | undefined = undefined,
  method: string = 'GET',
  token: string | null = null,
  formData: FormData | Object | undefined = undefined
) => {
  const config = useRuntimeConfig()

  const api: typeof useFetch = (url) => {
    return useFetch(url, {
      params: query,
      baseURL: config.public.apiUrl + '/api',
      key: url.toString(),
      method: method as any,
      headers: token ? [['Authorization', 'Token ' + token]] : undefined,
      body: formData,
    })
  }

  return { api }
}
