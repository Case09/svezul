import { writable } from 'svelte/store';

interface AzulStore {
	tiles: string[];
}

const azulStore = writable(<AzulStore>{
	tiles: []
});

export default azulStore;
