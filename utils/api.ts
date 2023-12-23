import axios from 'axios'

// const baseDomain = process.env.BASE_URL_API
const baseURL = 'http://sahee/api/'

export enum Resources {
  Template = 'templates',
  Approach = 'approaches',
  CustomerSegment = 'customer_segments',
  DeliveryContent = 'delivery_contents',
  Channels = 'channels',
  StoryAssigning = 'assigning',
  Customers = 'customers',
  DeliveryRequest = 'delivery_requests',
}

export enum Methods {
  Post = 'post',
  Get = 'get',
  Put = 'put',
  Delete = 'delete',
}

type ResponseResultType = {
  version: string
  data: { [key: string]: any }
  result: boolean
}

// Approach
export const serviceApi = async (
  methods: string,
  uri: string,
  formData?: object
): Promise<ResponseResultType> => {
  try {
    const Client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    let response: any = {}
    switch (methods) {
      case 'post':
        response = await Client.post(uri, formData)
        break
      case 'get':
        response = await Client.get(uri)
        break
      case 'put':
        response = await Client.put(uri, formData)
        break
      case 'delete':
        response = await Client.delete(uri)
        break
    }
    return response.data
  } catch (error) {
    return error.response.data
  }
}
