<script lang="ts">
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	import { azulColors } from '../lib';
	let colors = Object.values(azulColors);
	import azulStore from '$lib/stores/index';
	import { onMount } from 'svelte';

	onMount(() => {
		randomizeTiles();
	});

	function randomizeTiles(): void {
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
	<div class="board w-full h-full flex items-center justify-center text-5xl">
		<FactoryTile />
	</div>
</div>

<style>
</style>
