<script lang="ts">
	import azulStore from '$lib/stores/index';
	import Tile from './Tile.svelte';
</script>

<div
	class="flex h-[400px] w-[400px] items-center justify-center rounded-full border border-[#ccc] bg-[#ffecec]"
>
	<div class="flex w-[105px] scale-[2] flex-wrap gap-1">
		{#each $azulStore.tiles as tile}
			<Tile {tile} />
		{/each}
	</div>
</div>
