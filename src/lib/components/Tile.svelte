<script lang="ts">
	import type { TileColor } from '$lib';
	import { azulColors } from '$lib';
	export let tile: TileColor;
</script>

<div
	style="background-color: {azulColors[tile]}"
	class="tile text-xs text-white h-[50px] w-[50px] flex items-center justify-center"
>
	Tile
</div>

<style>
</style>
