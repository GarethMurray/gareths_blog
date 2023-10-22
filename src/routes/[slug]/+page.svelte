<script lang="ts">
	export let data;
	import { formatDate } from '$lib/utils';

  import 'prism-material-themes/themes/material-palenight.css';
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="prose prose-m 2xl:prose-2xl prose-invert md:prose-h1:text-[3.25rem]">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p>Published on {formatDate(data.meta.date)}</p>
	</hgroup>

	<svelte:component this={data.content} />
</article>
