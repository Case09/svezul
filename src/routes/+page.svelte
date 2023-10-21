<script lang="ts">
	import FactoryTile from '$lib/components/FactoryTile.svelte';
	import azulStore from '$lib/stores/index';
</script>

<div class="board-container h-screen w-screen p-2">
	<h1>Tiles in bag: {$azulStore.bag.length}</h1>
	<div class="board flex h-full w-full items-center justify-center text-5xl">
		<FactoryTile />
	</div>
</div>

<style>
</style>
