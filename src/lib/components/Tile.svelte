<script lang="ts">
	import type { TileColor } from '$lib';
	import { azulColors } from '$lib';
	export let tile: TileColor;
</script>

<div
	style="background-color: {azulColors[tile]}"
	class="tile flex h-[50px] w-[50px] items-center justify-center text-xs text-white"
>
	Tile
</div>

<style>
</style>
