<script lang="ts">
	export let name: string;
	let count = 0;
	let numbers = [1, 2, 3, 4];
$: doubled = count * 2;

/*$: {
	console.log('the count is ' + count);
	//alert('I SAID THE COUNT IS ' + count);
}*/
$: if (count >= 4) {
	alert('count is dangerously high!');
	count = 0;
}

function incrementCount() {
	count += 1;
	
}
function addNumber() {
		numbers.push(numbers.length + 1);
		numbers = numbers // tells compiler 'numbers' has changed
}
$: sum = numbers.reduce((t, n) => t + n, 0);

</script>

<main>
	<h1>Hello? {name} ?!?</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button on:click={incrementCount}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>
	<p>{count} doubled is {doubled}</p>
	<p>{numbers.join(' + ')} = {sum}</p>
	<button on:click={addNumber}>
		Add a number
	</button>
</main>

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