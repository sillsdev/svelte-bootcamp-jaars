<script lang="ts">
	import NavigationButton from './NavigationButton.svelte'

    import { location, push } from "svelte-spa-router";

	import { changeUrlPart } from './utils.js'

	function handleBookSelected(event) {
		changeUrlPart(3, event.detail.book);
	}

	export let selectedBook: string;

    let books = ["GEN", "EXO", "LEV", "NUM", "DEU"];
    let hasContent = true;
</script>

<body>
    {#each books as book }
    <NavigationButton selected={book === selectedBook} type="book" label={book} {hasContent} on:bookSelected={handleBookSelected}/>
        
    {/each}
</body>

<style>
	body {
		padding: 10px;
		margin: 10px auto;
		white-space:nowrap;
	}
</style>