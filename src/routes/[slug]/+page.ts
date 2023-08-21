import { error, type ServerLoad } from '@sveltejs/kit'

export const load: ServerLoad = async ({ params }) => {
  try {
    const post = await import(`../../../blog/${params.slug}.md`)

    return {
      content: post.default,
      meta: post.metadata
    }
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`)
  }
}
