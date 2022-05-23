<script>
    import { count } from './stores.js';

</script>

<h1>View 1</h1>
<button on:click={() => $count--} >-</button>
<input type=number bind:value={$count}/>
<button on:click={() => $count++}>+</button>
