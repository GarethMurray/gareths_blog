<script lang="ts">
  import { formatDate } from '$lib/utils'

  import Link from '$components/link.svelte'
  import Underline from '$components/underline.svelte'
  export let data
</script>

<svelte:head>
  <title>Gareth Murray's Online CV</title>
</svelte:head>

<section>
  <ul class="posts">
    <h3 class="mb-4">
      Thank you for taking the time to follow this link. I really love automation, Python, Data Science and Machine learning, and am happy that I can share some of my favourite things with you below!
    </h3>
    <h4 class="mb-6">A bit <Link href="/about">about me</Link></h4>
    {#if data?.posts}
      {#each data.posts as post}
        <a href={post.slug}>
          <div
            class="group my-4 -mx-4 rounded py-4 px-4 transition-transform hover:-translate-y-px hover:shadow-2xl hover:shadow-dark-800 hover:text-light-50"
          >
            <h3 class="mb-2 text-2xl font-bold capitalize">
              {post.title}
            </h3>
            <span class="flex md:items-end justify-between flex-col-reverse gap-2 md:flex-row">
              <h4 class="text-md font-light">{post.excerpt}</h4>
              <h5 class="text-sm text-light-900 opacity-75">
                {formatDate(post.date)}
              </h5>
            </span>
            <Underline />
          </div>
        </a>
      {/each}
    {:else}
      <h3 class="mb-4">No posts yet</h3>
    {/if}
  </ul>
</section>
