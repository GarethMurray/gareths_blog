import type { Post } from '$lib/types'
import { handleErrorMessage } from '$lib/utils'
import type { ServerLoad } from '@sveltejs/kit'

export const load: ServerLoad = async ({ fetch }) => {
  try {
    const response = await fetch('api/posts')
    const posts: Post[] = await response.json()

    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    return { posts }
  } catch (error) {
    handleErrorMessage(error)
    return { error: error.message }
  }
}

export const prerender = true
