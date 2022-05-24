<script lang="ts">
	export let selected: boolean = false;
	export let type: string;
	export let label: string;
	export let hasContent: boolean;

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<button class:hasContent class:selected on:click="{() => {dispatch(`${type}Selected`, {book: label})}}">{label}</button>

<style>
	button {
		min-width: 30px;
		max-width: 100px;
		margin-top: 1px;
		margin-left: 0px;
		margin-right: 5px;
		margin-top: 3px;
		text-align: center;
		padding-bottom: 30px;
		height: 38px;
		font-weight: 500;
		font-size: large;
	}
	.hasContent {
        background-color: blue;
        border-color: blue;
        color: white;
	}
    .selected {
        border-color: greenyellow;
        border-width: 2px;
    }
</style>