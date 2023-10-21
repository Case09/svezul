<script lang="ts">
	import { takeTilesFrom, tiles, type TileColor } from '$lib';
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	import azulStore, { numberOfTilesOfEachColor } from '$lib/stores/index';
	import { shuffle } from 'lodash';
	import { onMount } from 'svelte';

	onMount(() => {
		const initialBag: TileColor[] = shuffle(
			Array(numberOfTilesOfEachColor)
				.fill([...tiles])
				.flat()
		);

		const [initialTiles, bag] = takeTilesFrom(initialBag);

		$azulStore.bag = bag;
		$azulStore.tiles = initialTiles;
	});

	$: console.log($azulStore);
</script>

<div class="board-container h-screen w-screen p-2">
	{#if $azulStore.bag.length}
		<h1>Tiles in bag: {$azulStore.bag.length}</h1>
		<h1>Score: {$azulStore.score}</h1>
	{/if}
	<div class="board flex h-full w-full items-center justify-center text-5xl">
		<FactoryTile />
	</div>
</div>

<style>
</style>
