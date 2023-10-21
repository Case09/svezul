import type { TileColor } from '$lib';
import { writable } from 'svelte/store';

interface AzulStore {
	bag: TileColor[];
	tiles: TileColor[];
	score: number;
	gameOver: boolean;
}

export const numberOfTilesOfEachColor = 20;

const azulStore = writable(<AzulStore>{
	bag: [],
	tiles: [],
	score: 0,
	gameOver: false
});

export default azulStore;
