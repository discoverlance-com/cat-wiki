<script lang="ts">
	import { resolvePath } from '@sveltejs/kit';

	export let width = 220;
	export let height = 220;
	export let src: string;
	export let title: string;
	export let hasBackground = false;

	// TODO: Add actual implementation to get cat slug
	const url = resolvePath(`/cats/[slug]`, {
		slug: encodeURIComponent(title)
	});
</script>

<div>
	<div class="relative">
		{#if hasBackground}
			<div class="bg-[#DEC68B] absolute -left-3 rounded-[14px] top-1/2 h-44 w-3 -translate-y-1/2" />
		{/if}
		<img {src} alt={title} {height} {width} class="rounded-3xl" />
	</div>
	<a
		class="text-primary-200 font-semibold text-lg mt-5 inline-block hover:text-primary-200/60"
		href={url}>{title}</a
	>
</div>
