<script>
	import CatImage from '$components/CatImage.svelte';
</script>

<section class="bg-secondary-100 pt-4 sm:pt-11 pb-12 sm:pb-12 px-6 sm:px-24 rounded-b-[42px] mb-24">
	<h2 class="font-medium text-lg">Most Searched Breeds</h2>
	<span class="block w-16 h-1 bg-secondary-200 mt-2" />

	<div class="flex md:flex-row flex-col items-end justify-between gap-4">
		<h3 class="mt-9 font-bold text-lg sm:text-5xl sm:leading-[58px] max-w-[560px]">
			66+ Breeds For you to discover
		</h3>

		<div class="flex items-center gap-2 font-bold text-lg text-primary-200/60 group">
			<a class="block uppercase" href="/most-popular">See More</a>
			<span class="material-icons group-hover:text-primary-200">arrow_forward</span>
		</div>
	</div>

	<!-- Most Popular Cats -->
	<div
		class="mt-11 grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 place-items-center sm:grid-cols-2 gap-12"
	>
		<CatImage id="bengal" src="/cat-wiki-master/example-cat.png" title="Bengal" hasBackground />
		<CatImage id="bengal" src="/cat-wiki-master/example-cat.png" title="Savannah" />
		<CatImage id="bengal" src="/cat-wiki-master/example-cat.png" title="Norwegian Forest Cat" />
		<CatImage id="bengal" src="/cat-wiki-master/example-cat.png" title="Selkirk Rex" />
	</div>
</section>
