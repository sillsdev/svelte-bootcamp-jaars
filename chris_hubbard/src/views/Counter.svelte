<script>
    import {counter} from '../stores.js'
</script>

<h1>Counter</h1>

<button on:click={() => $counter++}>
	+
</button>
<input type="number" value={$counter} readonly />
<button on:click={() => $counter--}>
	-
</button>