<script lang="ts">
	export let currentView: number;
	export let uiLocale: string;
/* 	showMessage() {
		postMessage("clicked")
	} */
</script>

<menubar>
	<menuitem class:selected ="{currentView==0}" name="menuReadAndRecord"><img src="images/headset.png" alt="logo"/>Read &amp; Record</menuitem>
	<menuitem class:selected ="{currentView==1}" name="menuCheckForProblems"><img src="images/stethoscope.png" alt="logo"/>Check for Problems</menuitem>
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