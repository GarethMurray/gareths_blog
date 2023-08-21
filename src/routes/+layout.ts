import type { ServerLoad } from '@sveltejs/kit'

export const prerender = true

export const load: ServerLoad = async ({ url }) => {
  return {
    url: url.pathname
  }
}
