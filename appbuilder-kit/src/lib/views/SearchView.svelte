<script lang="ts">
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import { refs } from "$lib/data/stores";
    import { queryPk } from "$lib/scripts/queryPk";
    import { postQueries, queries } from "proskomma-tools";

    let searchText = "";
    let matchWholeWords = true;
    let searching = false;
    let passages: any[] = [];
    $: promise = search(searching)
    async function search(s = false) {
        if(!s) return; 
        if(searchText === "") return;

        const books = postQueries.searchForBookCodesFilter({
            data: JSON.parse(await queryPk(
                queries.searchForBookCodesQuery({
                    text: searchText,
                    docSetId: $refs.default.docSet
                })
            )).data
        })

        passages = [];

        for(const book of books) {
            passages = passages.concat(
                postQueries.searchForVersesFilter({
                    data: JSON.parse(await queryPk(
                        queries.searchForPassagesQuery({
                            text: searchText,
                            docSetId: $refs.default.docSet,
                            bookCode: book
                        })
                    )).data
                })
            )
        }
        console.log(passages.length)
        searching = false;
    }
</script>

<main class="mx-1">
<h1>Search</h1>
<form>
    <div class="dy-form-control">
        <label class="dy-input-group">
            <!-- svelte-ignore a11y-autofocus -->
            <input autofocus type="text" placeholder="Search" class="dy-input dy-input-bordered" bind:value={searchText}/>
            <button on:click|preventDefault={() => searching = true} class="dy-btn">
                <SearchIcon _class="fill-base-100"/>
            </button>
        </label>
    </div>
    <div class="dy-form-control w-full max-w-xs">
        <label class="dy-label cursor-pointer">
            <span class="dy-label-text">Match whole words</span> 
            <input type="checkbox" class="dy-toggle" bind:checked={matchWholeWords} />
        </label>
    </div>
</form>

{#await promise}
    searching . . . 
{:then results}
    {#each passages as p}
        <h2>{p.reference} <i>{p.docSetId}</i></h2>
        <p>{p.text}</p>
    {/each}
{/await}
</main>