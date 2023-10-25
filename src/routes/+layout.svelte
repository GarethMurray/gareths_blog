<script lang="ts">
	import Footer from '$components/footer.svelte'
	import Header from '$components/header.svelte'
	import PageTransition from './transition.svelte'

	import '../app.css'

	export let data
</script>

<div class="flex flex-col min-h-screen">
	<Header />

  <main class="md:pt-2 pb-4 pt-4 container">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>

	<Footer />
</div>