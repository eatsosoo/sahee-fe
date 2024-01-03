import type { ResponseResultType } from '@/composable/useApiFetch'

export const convertLikes = (likes: number) => {
  if (likes > 1000) {
    return likes.toString().slice(0, -3) + 'K'
  }

  if (likes > 1000000) {
    return likes.toString().slice(0, -6) + 'M'
  }

  if (likes > 1000000000) {
    return likes.toString().slice(0, -6) + 'B'
  }

  return likes
}

export const timeAgo = (createdAt: string) => {
  const currentTime = new Date()
  const createdTime = new Date(createdAt)

  const timeDiff = currentTime.getTime() - createdTime.getTime()
  const seconds = Math.floor(timeDiff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) {
    return days + ' days'
  } else if (hours > 0) {
    return hours + ' hours'
  } else if (minutes > 0) {
    return minutes + ' minutes'
  } else {
    return seconds + ' seconds'
  }
}

export const flatMessages = (message: { [key: string]: any }) => {
  let result = ''
  const values = Object.values(message)

  values.forEach((value) => {
    if (typeof value === 'object') {
      result += `${flatMessages(value)}`
    }

    if (Array.isArray(value)) {
      result += value.join('\n')
    }

    result += `${value} \n`
  })

  return result
}

export const parseErrorMessage = (value: ResponseResultType) => {
  return value ? flatMessages(value.data) : 'Something wrong. Please try again in a few minutes'
}
