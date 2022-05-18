<script lang="ts">
  import Header from '$components/header.svelte'
  import Footer from '$components/footer.svelte'
  import '../app.css'

</script>

<svelte:head>
	<title>Mike's blog</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  
  <Header />


  <main class="md:pt-2 pb-4 pt-4 container mx-auto max-w-[65ch] px-4 md:px-0">
    <slot />
  </main>
  <Footer/>
</div>
