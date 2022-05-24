<script lang="ts">
	import MainMenu from './MainMenu.svelte';
	import NavigationButton from './NavigationButton.svelte'
import { currentBook } from './stores';
	import TitleBar from './TitleBar.svelte';

	export let name: string;
	export let version: string;
</script>

<main>
	<TitleBar name={name} version={version}/>
	<MainMenu uiLocale="English"/>
	<body>
		<NavigationButton label="GEN" hasContent={true} on:clicked="{() => $currentBook = "GEN"}"/>
		<NavigationButton label="EXO" hasContent={true}/>
		<NavigationButton label="LEV" hasContent={true}/>
		<NavigationButton label="NUM" hasContent={false}/>
		<NavigationButton label="DEU" hasContent={true}/>
	</body>
</main>

<style>
	main {
		background-color: black;
	}
	body {
		padding: 10px;
		margin: 10px auto;
		white-space:nowrap;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>