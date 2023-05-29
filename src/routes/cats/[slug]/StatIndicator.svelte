<script lang="ts">
	export let value: number;

	let elements = new Array(5).fill(false, 0).fill(true, 0, value);
</script>

<div class="flex gap-2 items-center">
	{#each elements as stat}
		<span
			class="inline-block w-[60px] h-3 rounded-lg"
			class:bg-primary-200={stat}
			class:bg-primary-100={!stat}
		/>
	{/each}
</div>
