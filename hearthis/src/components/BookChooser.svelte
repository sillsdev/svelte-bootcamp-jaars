<script lang="ts">
	import NavigationButton from './NavigationButton.svelte'

	export let currentBook: string = "GEN";
	export let name: string;
	export let version: string;
</script>

<body>
    <NavigationButton label="GEN" hasContent={true} on:clicked="{() => currentBook = "GEN"}"/>
    <NavigationButton label="EXO" hasContent={true}/>
    <NavigationButton label="LEV" hasContent={true}/>
    <NavigationButton label="NUM" hasContent={false}/>
    <NavigationButton label="DEU" hasContent={true}/>
</body>

<style>
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