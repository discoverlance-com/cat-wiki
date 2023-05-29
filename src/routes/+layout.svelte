<script lang="ts">
	import PageTransition from '$components/PageTransition.svelte';
	import TheFooter from '$components/UI/layouts/TheFooter.svelte';
	import '../app.css';

	import type { LayoutServerData } from './$types';

	export let data: LayoutServerData;
</script>

<div class="mx-auto max-w-[1248px] px-4">
	<nav class="mt-9 mb-[30px]">
		<a href="/">
			<img src="/cat-wiki-master/CatwikiLogo.svg" alt="Cat Wiki Logo" width="128" height="43" />
		</a>
	</nav>
	<main class="mb-28">
		<PageTransition pathname={data.pathname}>
			<slot />
		</PageTransition>
	</main>

	<TheFooter />
</div>
