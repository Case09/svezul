<script lang="ts">
	import { takeTilesFrom, tiles, type TileColor } from '$lib';
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	import Wall from '$lib/components/Wall.svelte';
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

<div class="flex h-screen w-screen flex-col p-2">
	{#if $azulStore.bag.length && !$azulStore.gameOver}
		<h1>Tiles in bag: {$azulStore.bag.length}</h1>
		<h1>Score: {$azulStore.score}</h1>
	{/if}
	<div class="flex grow items-center justify-center gap-4">
		<div class="flex items-center justify-center text-5xl">
			<FactoryTile />
		</div>
		<Wall />
	</div>
</div>
