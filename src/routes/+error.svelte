<script lang="ts">
	import { page } from '$app/stores';
	import { ErrorEmojis } from '../emojis';

	const emoji = $page.status === 404 ? ErrorEmojis[404] : ErrorEmojis[500];
</script>

<svelte:head>
	<title>Error - Cat Wiki</title>
</svelte:head>

<p class="text-3xl text-primary-200/60 text-center mb-4">{$page.status} {emoji}</p>
<h1 class="text-primary-200 text-4xl text-center font-semibold">{$page.error?.message}</h1>
