// @ts-nocheck
import { writable, derived, get } from "svelte/store";
import { catalog } from './constants'

export const referenceStore = (/**@type{any}*/init) => {
    const internal = writable(init? init: {ds:"",b:"",c:"",n:0})
    const setInternal = ({docSet, book, chapter}) => {
        const original = get(internal)
        const docSets = catalog.map(ds => ds.id)
        if(!docSet || !docSets.includes(docSet)) docSet = docSets.includes(original.ds)? original.ds : docSets[0]
        
        const books = catalog.filter(ds => docSet === ds.id).documents.map(b => b.bookCode)
        if(!book || !books.includes(book)) book = books.includes(original.b)? original.b : books[0]

        const versesByChapters = catalog.filter(ds => docSet === ds.id).documents.filter(b => book === b.bookCode).versesByChapters
        if(!chapter || !Object.keys(versesByChapters).includes(chapter))
            chapter = Object.keys(versesByChapters).includes(original.c)? original.c : "1"
        
        internal.set({
            ds: docSet,
            b: book,
            c: chapter,
            n: Object.keys(versesByChapters[chapter]).length
        })
    }
    const external = derived(internal, ($internal) => ({
        reference: `${$internal.b} ${$internal.c}${$internal.n === ""? "":":"+$internal.n}`,
        docSet: $internal.ds,
        book: $internal.b,
        chapter: $internal.c,
        chapterVerses: `${$internal.c}:1-${$internal.n}`,
        numVerses: $internal.n,
        title: catalog.filter(ds => ds.id === $internal.ds)
            .documents?.filter(b => b.bookCode === $internal.b).toc
    }))
    return {subscribe: external.subscribe, set: setInternal}
}

export const groupStore = (/**@type{any}*/groupType,/**@type{any}*/props) => {
    /**@type{any}*/const stores = {default: groupType(props)}
    /**@type{any}*/const vals   = {default: undefined}
    /**@type{any}*/const unsubs = {default: stores.default.subscribe(v => vals.default = v)}
    /**@type{any[]}*/let subs = [];
    let subGroupCounts = {}

    const subscribe = (cb) => {
        subs.push(cb)
        cb(vals)           
        return () => subs = subs.filter(sub => sub !== cb)
    }

    const set = ({key, val}) => {
        if(val === undefined) {
            stores[key] = groupType(props)
            unsubs[key] = stores[key].subscribe(v => vals[key] = v)
        }
        subs.forEach(sub => sub(vals)) 
    }
    const addKey = (/**@type{any}*/key) => {
        if(stores[key] === undefined) {
            set({key: key, val: undefined})
            subGroupCounts[key] = 0
        }
        subGroupCounts[key] += 1;
        return () => {
            subGroupCounts[key] -= 1;
            if(subGroupCounts[key] <= 0) {
                unsubs[key]()
                delete unsubs[key]
                delete vals[key]
                delete stores[key]
            }
        }
    }

    return { subscribe, set, addKey }
}

/*
export const docSetStore = () => {
    const internal = writable("");
    const external = derived(internal, ($internal, set) => {
        queryPk(`{
            docSets {
                id
            }
        }`,
        r => {
            if($internal === "") {
                const ds = JSON.parse(r).data.docSets[0].id;
                $internal = ds;
                set(ds);
            } else { set($internal); }
        });
    })

    return { subscribe: external.subscribe, set: internal.set }
}
export const bookStore = (docSet) => {
    const internal = writable("");
    const external = derived([internal, docSet], ([$internal, $docSet], set) => {
        queryPk(`{
            docSet(id: "${$docSet}") {
                documents {
                    bookCode: header(id: "bookCode")
                }
                document(bookCode: "${$internal}") {
                    bookCode: header(id: "bookCode")
                }
            }
        }`, 
        r => {
            try{
                const b = JSON.parse(r).data.docSet.document;
                const firstBook = JSON.parse(r).data.docSet.documents[0].bookCode;
                if(b === null) {
                    $internal = firstBook;
                    set(firstBook);
                } else { 
                    $internal = b.bookCode;
                    set(b.bookCode);
                }
            } catch (err) {
                if(!(err instanceof TypeError)) { throw err;}
            }
        });
    })

    return { subscribe: external.subscribe, set: internal.set }
}
export const chapterStore = (docSet, book) => {
    const internal = writable("1");
    const external = derived([internal, docSet, book], ([$internal, $docSet, $book], set) => {
        queryPk(`{
            docSet(id: "${$docSet}") { 
                document(bookCode: "${$book}") {
                    cIndex(chapter: ${$internal}) {
                        text
                    }
                }
            }
        }`, 
        r => {
            try {
                const cExists = JSON.parse(r).data.docSet.document.cIndex.text !== "";
                if(cExists) { 
                    set($internal) 
                } else { 
                    $internal = "1";
                    set($internal); 
                }
            } catch (err) {
                if(!(err instanceof TypeError)) { throw err;}
            }
        });
    })

    return { set: internal.set, subscribe: external.subscribe }
}
export const numVersesStore = (docSet, book, chapter) => {
    return derived(
        [docSet, book, chapter],
        ([$docSet, $book, $chapter], set) => {
            queryPk(`{
                docSet(id: "${$docSet}") { 
                    document(bookCode:"${$book}") {
                        cvIndex(chapter:${$chapter}) {
                            verseNumbers { number }
                        }
                    }
                }
            }`, 
            r => {
                try {
                    set(JSON.parse(r).data.docSet.document.cvIndex.verseNumbers.length);
                } catch (err) {
                    if(!(err instanceof TypeError)) { throw err;}
                }
            });
        }
    );
}
*/