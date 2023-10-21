export const tiles = ['blue', 'orange', 'red', 'black', 'white'] as const;

export type TileColor = (typeof tiles)[number];

export const azulColors: Record<TileColor, string> = {
	blue: '#0277ad',
	orange: '#d19d3a',
	red: '#d74b42',
	black: '#0e0909',
	white: '#add0de'
};
