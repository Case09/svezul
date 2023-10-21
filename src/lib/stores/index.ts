import { tiles, type TileColor } from '$lib';
import { shuffle, take, drop } from 'lodash';
import { writable } from 'svelte/store';

interface AzulStore {
	bag: TileColor[];
	tiles: TileColor[];
}

const numberOfTilesOfEachColor = 20;
const initialBag: TileColor[] = shuffle(
	Array(numberOfTilesOfEachColor)
		.fill([...tiles])
		.flat()
);

function takeTilesFrom(tiles: TileColor[]): [TileColor[], TileColor[]] {
	const taken = take(tiles, 4);
	const remaining = drop(tiles, 4);
	return [taken, remaining];
}

const [initialTiles, bag] = takeTilesFrom(initialBag);

const azulStore = writable(<AzulStore>{
	bag,
	tiles: initialTiles
});

export default azulStore;
