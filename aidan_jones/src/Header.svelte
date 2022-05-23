<script>
    import { page, count } from './stores.js';

    const pageNames = ['View One', 'View Two', 'View Three'];

    function switchPage(pageName) {
        page.set(pageName);
    }
</script>

<main class="clearfix">
    <h2>Header</h2>
    <ul>
        {#each pageNames as p}
            <li><button on:click={() => switchPage(p)}>{p}</button></li>
        {/each}
    </ul>
    <h3>Counter = {$count}</h3>
</main>

<style>
    h2{
        float: left;
        display: inline;
    }
    h3{
        float: right;
        display: inline;
        padding-right: 0;
    }
    ul {
        display: inline;
        list-style-type: none;
        margin: auto;
        width: 50%;
    }
    li{
        display: inline;
    }
    main{
        background-color: #aaaaaa;
        margin: 0px;
        padding: 5px;
    }

    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
</style>