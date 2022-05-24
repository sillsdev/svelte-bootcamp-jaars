<script lang="ts">
	import Navbar from "./Navbar.svelte";
	import Router from 'svelte-spa-router'
	import routes from "./routes"

	let Pages = [
		{ url: "/", label: "Home" },
		{ url: "/#/about", label: "About"},
		{ url: "/#/search", label: "Search"},
		{ url: "/#/settings", label: "Settings"},
		{ url: "/#/notes", label: "Notes"},

	]
</script>




<main>
	<Navbar navlists={Pages}/>
	<Router {routes} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		padding-top: 0;
		max-width: 240px;
		margin: 0 auto;
	}
	 
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
