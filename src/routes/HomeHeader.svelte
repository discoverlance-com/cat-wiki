<script lang="ts">
	import type { Breed } from '$types/cat';
	import { resolvePath } from '@sveltejs/kit';
	import { fly } from 'svelte/transition';

	let timer: NodeJS.Timeout;
	let foundBreeds: Breed[] = [];

	async function handleInputChange(
		event: Event & {
			currentTarget: EventTarget & HTMLInputElement;
		}
	) {
		clearTimeout(timer);
		const value = event.currentTarget.value.toLowerCase();
		timer = setTimeout(async () => {
			// perform search
			const response = await fetch(`/cats/breeds?breed=${encodeURIComponent(value)}`);

			const { breeds } = await response.json();

			foundBreeds = breeds;
		}, 750);
	}
</script>

<header
	class="bg-black rounded-t-[42px] lg:bg-[url('/cat-wiki-master/HeroImagelg.png')] md:bg-[url('/cat-wiki-master/HeroImagemd.png')] bg-[url('/cat-wiki-master/HeroImagesm.png')] bg-cover bg-no-repeat bg-left"
>
	<div class="pt-7 md:pt-[105px] pl-7 md:pl-[106px] pb-28">
		<h1 class="font-mystery-quest text-white text-3xl tracking-wide mb-2 md:mb-3 md:text-[64px]">
			CatWiki
		</h1>
		<p class="font-medium text-white text-lg md:text-2xl">Get to know more about your cat breed</p>

		<!-- Search -->
		<div class="mt-[52px] relative w-[135px] sm:w-[394px] h-[70px]">
			<!-- Larger Screens -->
			<input
				type="search"
				on:input={handleInputChange}
				name="cat"
				class="rounded-[59px] sm:block hidden h-full py-6 pl-7 pr-10 placeholder:text-primary-200 text-lg w-full"
				placeholder="Enter your breed"
			/>
			<div class="hidden sm:absolute right-7 top-1/2 -translate-y-1/2">
				<span class="material-icons text-primary-200 w-4 h-4">search</span>
			</div>
			<!-- Mobile -->
			<input
				type="search"
				on:input={handleInputChange}
				name="cat"
				class="rounded-[59px] h-9 w-32 block sm:hidden py-2 pl-3 pr-6 placeholder:text-primary-200 text-sm"
				placeholder="Search"
			/>

			<div class="absolute sm:hidden right-7 top-1">
				<span class="material-icons text-primary-200 w-[10px] h-[10px]">search</span>
			</div>
		</div>
		<!-- Search results -->
		{#if foundBreeds.length > 0}
			<div
				class="absolute top-[430px] h-56 w-[135px] sm:w-[394px] rounded-3xl overflow-y-scroll bg-white pt-7 px-5"
				transition:fly={{ y: -20 }}
				data-sveltekit-preload-data="off"
			>
				{#each foundBreeds as breed}
					<a
						href={resolvePath(`/cats/[slug]`, { slug: breed.reference_image_id })}
						class="text-lg text-black block hover:bg-[#979797]/10 hover:rounded-xl pl-3 py-4"
						>{breed.name}</a
					>
				{/each}
			</div>
		{/if}
	</div>
</header>
