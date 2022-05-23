<script lang="ts">
	import Header from './Header.svelte';
	export let name: string;
	let views = 1;
</script>
<header>
	<Header/>
</header>
<main>
	{#if views === 1 }
	<h2>Hello {name}!</h2>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<p>
		Views is {views}
	</p>
	{:else if views ===2}
	<h2> View 2 </h2>
	{:else}
	<h2>Must be View 3</h2>
	{/if} 
</main>
<footer>
	<f1>Footer Text</f1>
</footer>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>