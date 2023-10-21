<script lang="ts">
	import { tiles, type TileColor } from '$lib';
	import { take, takeRight } from 'lodash';
	import Tile from './Tile.svelte';

	function rotate<T>(index: number, list: T[]): T[] {
		const head = takeRight(list, index);
		const tail = take(list, list.length - index);
		return [...head, ...tail];
	}

	const rows: TileColor[][] = [];
	for (let i = 0; i < 5; i++) {
		rows.push(rotate(i, [...tiles]));
	}
</script>

<div>
	{#each rows as row}
		<div class="flex">
			{#each row as tile}
				<Tile {tile} />
			{/each}
		</div>
	{/each}
</div>
