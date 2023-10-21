import type { TileColor } from '$lib';
import { writable } from 'svelte/store';

interface AzulStore {
	bag: TileColor[];
	tiles: TileColor[];
}

export const numberOfTilesOfEachColor = 20;

const azulStore = writable(<AzulStore>{
	bag: [],
	tiles: []
});

export default azulStore;
