<script lang="ts">
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import { docSet } from "$lib/data/stores";
    import { queryPk } from "$lib/scripts/queryPk";
    import { queries } from 'proskomma-tools';
    let searchText = "";
    let matchWholeWords = true;
    let results = [];
    function submit() {
        const bcQuery = queries.searchForBookCodes({
            text: searchText,
            docSetId: $docSet
        });
        console.log(bcQuery);
    }
</script>

<h1>Search</h1>
<form>
    <div class="dy-form-control">
        <label class="dy-input-group">
            <!-- svelte-ignore a11y-autofocus -->
            <input autofocus type="text" placeholder="Search" class="dy-input dy-input-bordered" bind:value={searchText}/>
            <button on:click|preventDefault={submit} class="dy-btn">
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
