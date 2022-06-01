<script>
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    let searchText = "";
    let matchWholeWords = true;
    function submit() {
        console.log("search: "+searchText+"\nmatch whole words: "+matchWholeWords)
    }
</script>

<h1>Search</h1>
<form>
    <div class="dy-form-control">
        <label class="dy-input-group">
            <!-- svelte-ignore a11y-autofocus -->
            <input autofocus type="text" placeholder="Search" class="dy-input dy-input-bordered" bind:value={searchText}/>
            <button on:click|preventDefault={submit} class="dy-btn">
                <SearchIcon />
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
