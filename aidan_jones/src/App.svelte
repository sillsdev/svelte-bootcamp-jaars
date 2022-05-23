<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import View_One from './View_One.svelte';
	import View_Two from './View_Two.svelte';
	import View_Three from './View_Three.svelte';
	import { page } from './stores.js';
	

	const pages = {
		'View One': View_One,
		'View Two': View_Two,
		'View Three': View_Three,
	};
</script>

<main>
	<Header/>
	<svelte:component this={pages[$page]}/>
	<Footer/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>