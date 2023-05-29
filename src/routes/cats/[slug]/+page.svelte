<script lang="ts">
	import CatImage from '$components/CatImage.svelte';
	import StatIndicator from './StatIndicator.svelte';

	import type { PageData } from './$types';
	import type { Breed, Cat } from '$types/cat';
	import { resolvePath } from '@sveltejs/kit';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	let breed: Breed;

	if (data.cat.breeds && data.cat.breeds.length > 0) {
		breed = data.cat.breeds[0];
	}

	async function getBreeds() {
		const response = await fetch(resolvePath(`/cats/breeds/[id]`, { id: breed.id }));

		const { breeds } = await response.json();

		return breeds as Omit<Cat, 'breeds'>[];
	}
	let getBreedsPromise = getBreeds();
</script>

<svelte:head>
	<title>{breed.name ?? 'View Cat'} - Cat Wiki</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2">
	<div class="pl-4 sm:pl-4">
		<CatImage
			id={data.cat.id}
			src={data.cat.url}
			title={breed.name}
			width={370}
			height={370}
			hasBackground
			backgroundHeight={305}
			showTitle={false}
		/>
	</div>

	<div>
		<h1 class="font-semibold text-4xl text-primary-200">{breed.name}</h1>
		<p class="text-lg font-medium mb-6 leading-5 mt-[25px] text-primary-200">
			{breed.description}
		</p>

		<div class="space-y-4">
			<p class="text-primary-200 font-medium">
				<span class="font-bold">Temperament:</span>
				{breed.temperament}
			</p>
			<p class="text-primary-200 font-medium">
				<span class="font-bold">Origin:</span>
				{breed.origin}
			</p>
			<p class="text-primary-200 font-medium">
				<span class="font-bold">Life Span:</span>
				{breed.life_span} years
			</p>
			<ul class="space-y-4">
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Adaptability</span>
					<StatIndicator value={breed.adaptability} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Afection Level</span>
					<StatIndicator value={breed.affection_level} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Child Friendly</span>
					<StatIndicator value={breed.child_friendly} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Dog Friendly</span>
					<StatIndicator value={breed.dog_friendly} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Energy Level</span>
					<StatIndicator value={breed.energy_level} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Grooming</span>
					<StatIndicator value={breed.grooming} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Intelligence</span>
					<StatIndicator value={breed.intelligence} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Health Issues</span>
					<StatIndicator value={breed.health_issues} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Social Needs</span>
					<StatIndicator value={breed.social_needs} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Stranger Friendly</span>
					<StatIndicator value={breed.stranger_friendly} />
				</li>
			</ul>
		</div>
	</div>
</div>

<h2 class="mb-10 mt-20 text-4xl font-semibold text-primary-200">Other Photos</h2>

{#if data.cat.breeds && data.cat.breeds.length > 0}
	{#await getBreedsPromise}
		<p class="text-primary-200/60 text-lg">Loading other {breed.name} photos...</p>
	{:then breeds}
		<div
			transition:fade
			class="grid md:grid-cols-3 sm:grid-cols-2 max-sm:justify-center lg:grid-cols-4 gap-11"
		>
			{#each breeds as breed}
				<CatImage
					src={breed.url}
					title={breed.id}
					id={breed.id}
					width={278}
					height={278}
					showTitle={false}
				/>
			{/each}
		</div>
	{:catch error}
		<p class="text-primary-200/60 text-lg">{error.message}</p>
	{/await}
{:else}
	<p class="text-primary-200/60 text-lg">No other breed photos</p>
{/if}
