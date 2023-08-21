<script lang="ts">
  export let href: string
  export let newTab = false
  export let addClass = ''
  const newClass = `${addClass} text-secondary-400 underline hover:text-secondary-300 py-2`
</script>

{#if newTab}
  <a {href} class={newClass} target="_blank">
    <slot />
  </a>
{:else}
  <a {href} class={newClass}>
    <slot />
  </a>
{/if}
