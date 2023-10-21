<script lang="ts">
	import { tiles, type TileColor } from '$lib';
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	import azulStore from '$lib/stores/index';
	import { onMount } from 'svelte';

	onMount(() => {
		randomizeTiles();
	});

	function randomizeTiles(): void {
		const numberOfTiles = 4;
		let randomTiles: TileColor[] = [];
		for (let i = 0; i < numberOfTiles; i++) {
			const idx = Math.floor(Math.random() * 5);
			randomTiles.push(tiles[idx]);
		}
		$azulStore.tiles = randomTiles;
	}
</script>

<div class="board-container p-2 h-screen w-screen">
	<div class="board w-full h-full flex items-center justify-center text-5xl">
		<FactoryTile />
	</div>
</div>

<style>
</style>
