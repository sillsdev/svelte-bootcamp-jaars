import { docSetStore, bookStore, chapterStore, numVersesStore } from './store-types';
import { derived, writable, readable, get } from 'svelte/store';
import { queryPk } from '../scripts/queryPk';

export const docSets = {
    "curr": docSetStore(),
    "next": docSetStore()
}

export const books = {
    "curr": bookStore(docSets["curr"]),
    "next": bookStore(docSets["next"])
}

export const chapters = {
    "curr": chapterStore(docSets["curr"], books["curr"]),
    "next": chapterStore(docSets["next"], books["next"])
}

export const verseNums = {
    "curr": numVersesStore(docSets["curr"], books["curr"], chapters["curr"]),
    "next": numVersesStore(docSets["next"], books["next"], chapters["next"])
}

//export const docSet = docSetStore();
//export const book = bookStore(docSet);
//export const chapter = chapterStore(docSet, book);
//export const numVerses = numVersesStore(docSet, book, chapter);

//export const nextDocSet = docSetStore();
//export const nextBook = bookStore(nextDocSet);
//export const nextChapter = chapterStore(nextDocSet, nextBook);
//export const nextNumVerses = numVersesStore(nextDocSet, nextBook, nextChapter);

export const bookTitle = derived([docSets["curr"], books["curr"]], 
    ([$ds, $b], set) => {
    queryPk(`{
        docSet(id: "${$ds}") {
            document(bookCode: "${$b}") {
                bookTitle: header(id: "toc")
            }
        }
    }`,
    r => {
        try {
            set(JSON.parse(r).data.docSet.document.bookTitle);
        } catch (err) {
            if(!(err instanceof TypeError)) { throw err;}
        }
    })
});

export const viewMode = writable("Side By Side");
