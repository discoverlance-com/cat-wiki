<script lang="ts">
	import { resolvePath } from '@sveltejs/kit';

	export let width = 220;
	export let height = 220;
	export let backgroundWidth = 12;
	export let backgroundHeight = 176;
	export let src: string;
	export let id: string;
	export let title: string;
	export let showTitle = true;
	export let hasBackground = false;

	const url = resolvePath(`/cats/[slug]`, {
		slug: id
	});
</script>

<div>
	<div class="relative">
		{#if hasBackground}
			<div
				class="bg-[#DEC68B] absolute -left-3 rounded-[14px] top-1/2 -translate-y-1/2"
				id="background"
				style="height: {backgroundHeight}px; width: {backgroundWidth}px;"
			/>
		{/if}
		<img {src} alt={title} {height} {width} class="rounded-3xl" />
	</div>
	{#if showTitle}
		<a
			data-sveltekit-preload-data="off"
			class="text-primary-200 font-semibold text-lg mt-5 inline-block hover:text-primary-200/60"
			href={url}>{title}</a
		>
	{/if}
</div>
