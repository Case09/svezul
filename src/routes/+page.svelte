<script lang="ts">
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	let colors = ['red', 'blue', 'green', 'yellow'];
	import azulStore from '$lib/stores/index';

	function handleRandomizeClick(e: Event): void {
		const numberOfTiles = 4;
		let tiles = [];
		for (let i = 0; i < numberOfTiles; i++) {
			const idx = Math.floor(Math.random() * 4);
			tiles.push(colors[idx]);
		}
		$azulStore.tiles = tiles;
	}
</script>

<div class="board-container p-2 h-screen w-screen">
	<button class="p-2 rounded bg-red-500 text-white" on:click={handleRandomizeClick}
		>Randomize</button
	>
	<div class="board w-full h-full flex items-center justify-center text-5xl">
		<FactoryTile />
	</div>
</div>

<style>
</style>
