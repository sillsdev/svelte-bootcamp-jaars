import { groupStore, referenceStore } from './store-types';
import { writable } from 'svelte/store';

export const refs = groupStore(referenceStore)

export const scrolls = groupStore(writable, "title")

export const viewMode = writable("Side By Side");

/*
//export const docSet = docSetStore();
//export const book = bookStore(docSet);
//export const chapter = chapterStore(docSet, book);
//export const numVerses = numVersesStore(docSet, book, chapter);

//export const nextDocSet = docSetStore();
//export const nextBook = bookStore(nextDocSet);
//export const nextChapter = chapterStore(nextDocSet, nextBook);
//export const nextNumVerses = numVersesStore(nextDocSet, nextBook, nextChapter);
*/