<script lang="ts">
	export let name: string;
	export let version: string;
</script>

<h1>
	<img src="favicon.png" alt="logo"/>{name} -- HearThis {version}
</h1>

<style>
	img {
		max-height: 100%;
		padding-top: 4px;
		padding-bottom: 4px;
		padding-right: 8px;
		display: inline;
		vertical-align: middle;
	}

	h1 {
		background-color:aliceblue;
		padding-bottom: 4px;
		height: 42px;
		color:darkslategray;
		font-weight: 100;
		font-size: larger;
	}
</style>