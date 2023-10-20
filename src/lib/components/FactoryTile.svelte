<script lang="ts">
	import Tile from './Tile.svelte';
</script>

<div class="factory-tile bg-red-300 w-[400px] h-[400px] flex justify-center items-center">
	<div class="tiles">
		<Tile color="tomato" />
		<Tile color="maroon" />
		<Tile color="hotpink" />
		<Tile color="aqua" />
	</div>
</div>

<style>
	.factory-tile {
		border-radius: 50%;
	}
	.tiles {
		display: flex;
		flex-wrap: wrap;
		width: 100px;
		transform: scale(2);
	}
</style>
