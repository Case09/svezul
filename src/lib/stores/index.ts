import type { TileColor } from '$lib';
import { writable } from 'svelte/store';

interface AzulStore {
	tiles: TileColor[];
}

const azulStore = writable(<AzulStore>{
	tiles: []
});

export default azulStore;
