<script lang="ts">
	import { view } from './stores.js';

	const viewNames = ['Read &amp; Record', 'Check for Problems'];
	const viewIcons = ['headset', 'stethoscope'];

	export let uiLocale: string;

	function switchView(viewName) {
        view.set(viewName);
    }
</script>

<menubar>
	{#each viewNames as v}
		<menuitem class:selected ="{$view==v}" on:click={() => switchView(v)}><img src="images/{viewIcons[viewNames.indexOf(v)]}.png" alt="logo"/>{v}</menuitem>
	{/each}
	<menuItem class="right" name="menuUi">{uiLocale}</menuItem>
</menubar> 

<style>
	img {
		max-height: 100%;
		margin-right: 10px;
		display: inline;
		vertical-align: middle;
	}

	menubar {
		height: 42px;
		color:darkgray;
		font-size: medium;
	}

	menuitem {
		margin-right: 10px;
	}

	.selected {
		border-bottom: 2px solid blue;
		color: white;
	}

	.right {
		position: absolute;
		right: 10px;
	}
</style>