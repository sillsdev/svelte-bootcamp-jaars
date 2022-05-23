<script>

    let promise = getData();

    function handleClick() {
        promise = getData();
    }

    async function getData() {
        let index = 1+Math.floor(Math.random()*100);
        return await fetch('https://jsonplaceholder.typicode.com/posts/'+index)
            .then(response => response.json());
    }
    
</script>

<h1>View 3</h1>
{#await promise then value}
<article>
        <h2>{value["title"]}</h2>
        <p>{value["body"]}</p>
</article>
{/await}
<button on:click={handleClick}>Get Random Post</button>

<style>
    article {
        margin: auto;
        width: 50%;
        border-color: #555555;
        border-style:solid;
        text-align: left;
        padding: 5px;
    }
</style>
