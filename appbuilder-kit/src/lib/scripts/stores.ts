import { derived, readable, writable } from 'svelte/store';
import globalConfigJson from '../../config.json';

export const globalConfig = readable(globalConfigJson);
export const activeBookName = writable("john");
export const activeBook = derived([activeBookName, globalConfig], ([ $activeBookName, $globalConfig ]) => 
    // FIXME: Currently no functionality for multiple book collections
    $globalConfig.bookCollections[0].books.find(book => book.name.toLowerCase() === $activeBookName.toLowerCase())
);
