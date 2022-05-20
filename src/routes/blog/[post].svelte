<script context="module" lang="ts">
  interface iProps {
    params: { post: string }
  }
  export const load = async ({ params }: iProps) => {
    const post = await import(`../../../blog/${params.post}.md`).then(({ default: post }) => post)
    return { props: { post } }
  }
</script>

<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  export let post: SvelteComponent
  import 'prism-material-themes/themes/material-palenight.css'




</script>

<article class="prose prose-sm xl:prose-xl prose-invert md:prose-h1:text-[3.25rem]">
  <svelte:component this="{post}" />
</article>

