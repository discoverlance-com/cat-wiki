<script lang="ts">
	import CatImage from '$components/CatImage.svelte';
</script>

<h1 class="font-bold text-4xl text-primary-200 mb-12">Top 10 most searched breeds</h1>

<ol class="space-y-14">
	<!-- One of the Items -->
	<li class="flex gap-12 items-start">
		<div class="flex-shrink-0">
			<CatImage
				src="/cat-wiki-master/example-cat.png"
				title="Cat"
				width={170}
				height={170}
				showTitle={false}
			/>
		</div>
		<div>
			<h2 class="font-semibold text-4xl text-primary-200 mb-6">1. Bengal</h2>
			<p class="text-primary-200 font-medium text-lg">
				Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or
				for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of
				interaction and woe betide the owner who doesn't provide it.
			</p>
		</div>
	</li>
</ol>
