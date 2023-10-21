import { get } from 'svelte/store';
import azulStore from './stores';

export const tiles = ['blue', 'orange', 'red', 'black', 'white'] as const;

export type TileColor = (typeof tiles)[number];

export const azulColors: Record<TileColor, string> = {
	blue: '#0277ad',
	orange: '#d19d3a',
	red: '#d74b42',
	black: '#0e0909',
	white: '#add0de'
};

export function pickTile(tile: TileColor) {
	const azulStoreValue = get(azulStore);
	const points = azulStoreValue.tiles.filter((t) => t === tile).length;
	azulStore.update((s) => ({ ...s, score: s.score + points }));
}
