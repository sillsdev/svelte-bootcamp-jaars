<script lang="ts">
	import Header from './Header.svelte';
	import View1 from './View1.svelte';
	import View2 from './View2.svelte';
	import View3 from './View3.svelte';
	export let name: string = 'App';
	let views = 1;
	let count = 0;
</script>
<header>
	<Header bind:views={views} bind:count={count}/>
</header>
<main>
	{#if views === 1 }
	<View1 bind:names={name} bind:views={views} bind:count={count} />
	{:else if views ===2}
	<View2 />
	{:else}
	<View3 />
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