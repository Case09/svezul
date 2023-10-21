<script lang="ts">
	import Tile from './Tile.svelte';
	import azulStore from '$lib/stores/index';
</script>

<div class="factory-tile bg-red-300 w-[400px] h-[400px] flex justify-center items-center">
	<div class="tiles flex jusitfy-center align-center gap-1">
		{#each $azulStore.tiles as tile}
			<Tile {tile} />
		{/each}
	</div>
</div>

<style>
	.factory-tile {
		border-radius: 50%;
		background-color: #ffecec;
		border: 1px solid #ccc;
	}
	.tiles {
		display: flex;
		flex-wrap: wrap;
		width: 105px;
		transform: scale(2);
	}
</style>
