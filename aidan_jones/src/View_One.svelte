<script>
    import { count } from './stores.js';
</script>

<main>
    <h1>View 1</h1>
    <button on:click={() => count.update(n => n-1)}>-</button>
    <input type=number bind:value={$count}/>
    <button on:click={() => count.update(n => n+1)}>+</button>
</main>