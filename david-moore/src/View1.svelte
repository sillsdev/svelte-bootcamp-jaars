<script lang="ts">
	export let views = 0;
    export let names = "World";
    export let count = 0;
</script>
<h2>Hello {names}!</h2>
<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
<p>
    View number is {views}
</p>
<button on:click={() => count--} >-</button>
<input type=number bind:value={count}/>
<button on:click={() => count++}>+</button>
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