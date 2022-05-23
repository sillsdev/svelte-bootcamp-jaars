<script>
    import { page } from './stores.js';

    const pageNames = ['View One', 'View Two', 'View Three'];

    function switchPage(pageName) {
        page.set(pageName);
    }
</script>

<header>
    <h2>Header</h2>
    <ul>
        {#each pageNames as p}
            <li><button on:click={() => switchPage(p)}>{p}</button></li>
        {/each}
    </ul>
    <h3>Counter = 10</h3>
</header>