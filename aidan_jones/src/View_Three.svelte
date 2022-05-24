<script>
    import { onMount } from 'svelte';
    let data = [];

    onMount(async function(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/?userId=1')
        data = await response.json();
    });

    function handleClick(item) {
        let index = data.indexOf(item);
        data = data.slice(0,index).concat(data.slice(index+2));
    }
</script>

<h1>View 3</h1>
{#each data as item (item.id)}
    <p>
        <span>{item.title}
            <button on:click={() => handleClick(item)}>delete</button>
        </span>
    </p>
{/each}



<style>
	p {
		margin: 0.8em 0;
        text-align: left;
	}
	span {
		display: inline-block;
		padding: 0.2em 1em 0.3em;
		text-align: center;
		border-radius: 0.2em;
		background-color: #FFDFD3;
	}
</style>
