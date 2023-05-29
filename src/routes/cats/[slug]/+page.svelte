<script>
	import CatImage from '$components/CatImage.svelte';
	import StatIndicator from './StatIndicator.svelte';
</script>

<svelte:head>
	<title>View Cat - Cat Wiki</title>
</svelte:head>

<div class="grid grid-cols-1 md:grid-cols-2">
	<div class="pl-4 sm:pl-4">
		<CatImage
			src="/cat-wiki-master/example-cat.png"
			title="Cat"
			width={370}
			height={370}
			hasBackground
			backgroundHeight={305}
			showTitle={false}
		/>
	</div>

	<div>
		<h1 class="font-semibold text-4xl text-primary-200">Bengal</h1>
		<p class="text-lg font-medium mb-6 leading-5 mt-[25px] text-primary-200">
			Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for
			first-time cat owners. Extremely intelligent, curious and active, they demand a lot of
			interaction and woe betide the owner who doesn't provide it.
		</p>

		<div class="space-y-4">
			<p class="text-primary-200 font-medium">
				<span class="font-bold">Temperament:</span> Alert, Agile, Energetic, Demanding, Intelligent
			</p>
			<p class="text-primary-200 font-medium">
				<span class="font-bold">Origin:</span> United States
			</p>
			<p class="text-primary-200 font-medium">
				<span class="font-bold">Life Span:</span> 12 - 15 years
			</p>
			<ul class="space-y-4">
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Adaptability</span>
					<StatIndicator value={0} />
				</li>
				<li
					class="text-primary-200 font-medium flex sm:flex-row flex-col gap-3 sm:gap-[70px] items-center"
				>
					<span class="font-bold flex-1">Afection Level</span>
					<StatIndicator value={3} />
				</li>
			</ul>
		</div>
	</div>
</div>

<h2 class="mb-10 mt-20 text-4xl font-semibold text-primary-200">Other Photos</h2>

<div class="grid md:grid-cols-3 sm:grid-cols-2 max-sm:justify-center lg:grid-cols-4 gap-11">
	<CatImage
		src="/cat-wiki-master/example-cat.png"
		title="Cat"
		width={278}
		height={278}
		showTitle={false}
	/>
	<CatImage
		src="/cat-wiki-master/example-cat.png"
		title="Cat"
		width={278}
		height={278}
		showTitle={false}
	/>
	<CatImage
		src="/cat-wiki-master/example-cat.png"
		title="Cat"
		width={278}
		height={278}
		showTitle={false}
	/>
	<CatImage
		src="/cat-wiki-master/example-cat.png"
		title="Cat"
		width={278}
		height={278}
		showTitle={false}
	/>
</div>
