<script lang="ts">
	import type { TileColor } from '$lib';
	import { azulColors, pickTile } from '$lib';
	export let tile: TileColor;

	$: currentTile = azulColors[tile];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	style="background-color: {currentTile}"
	on:click={() => pickTile(tile)}
	class="flex h-[50px] w-[50px] items-center justify-center text-xs text-white"
>
	Tile
</div>
