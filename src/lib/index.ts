import { get } from 'svelte/store';
import azulStore from './stores';
import { drop, take } from 'lodash';

export const tiles = ['blue', 'orange', 'red', 'black', 'white'] as const;

export type TileColor = (typeof tiles)[number];

export const azulColors: Record<TileColor, string> = {
	blue: '#0277ad',
	orange: '#d19d3a',
	red: '#d74b42',
	black: '#0e0909',
	white: '#add0de'
};

export function takeTilesFrom(tiles: TileColor[]): [TileColor[], TileColor[]] {
	const taken = take(tiles, 4);
	const remaining = drop(tiles, 4);
	return [taken, remaining];
}

export function pickTile(tile: TileColor) {
	const azulStoreValue = get(azulStore);
	const points = azulStoreValue.tiles.filter((t) => t === tile).length;
	const [newTiles, bag] = takeTilesFrom(azulStoreValue.bag);
	azulStore.update((s) => ({
		bag,
		tiles: newTiles,
		score: s.score + points
	}));
}
