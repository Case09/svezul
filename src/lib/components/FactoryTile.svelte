<script lang="ts">
	import azulStore from '$lib/stores/index';
	import Tile from './Tile.svelte';

</script>

<div class="factory-tile flex h-[400px] w-[400px] items-center justify-center bg-red-300">
	<div class="tiles jusitfy-center align-center flex gap-1">
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
