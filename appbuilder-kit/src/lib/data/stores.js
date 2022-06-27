import { docSetStore, bookStore, chapterStore, numVersesStore } from './reference-stores';
import { derived, writable } from 'svelte/store';
import { queryPk } from '../scripts/queryPk';

export const docSet = docSetStore();
export const book = bookStore(docSet);
export const chapter = chapterStore(docSet, book);
export const numVerses = numVersesStore(docSet, book, chapter);

export const nextDocSet = docSetStore();
export const nextBook = bookStore(nextDocSet);
export const nextChapter = chapterStore(nextDocSet, nextBook);
export const nextNumVerses = numVersesStore(nextDocSet, nextBook, nextChapter);

export const bookTitle = derived([docSet, book], ([$docSet, $book], set) => {
    queryPk(`{
        docSet(id: "${$docSet}") {
            document(bookCode: "${$book}") {
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

export const viewMode = writable("Two Panes");
