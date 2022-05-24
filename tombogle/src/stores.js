import { writable } from 'svelte/store';

export const currentBook = writable("EXO");
export const currentChapter = writable(2);
export const view = writable("Read &amp; Record");