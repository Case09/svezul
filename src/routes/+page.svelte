<script lang="ts">
	import { tiles, type TileColor } from '$lib';
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	import azulStore, { numberOfTilesOfEachColor } from '$lib/stores/index';
	import { drop, shuffle, take } from 'lodash';
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

	function takeTilesFrom(tiles: TileColor[]): [TileColor[], TileColor[]] {
		const taken = take(tiles, 4);
		const remaining = drop(tiles, 4);
		return [taken, remaining];
	}

	$: console.log($azulStore);
</script>

<div class="board-container h-screen w-screen p-2">
	{#if $azulStore.bag.length}
		<h1>Tiles in bag: {$azulStore.bag.length}</h1>
	{/if}
	<div class="board flex h-full w-full items-center justify-center text-5xl">
		<FactoryTile />
	</div>
</div>

<style>
</style>
