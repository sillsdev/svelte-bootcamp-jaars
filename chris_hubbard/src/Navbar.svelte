<script>
    export let navlists = [];

    import {counter} from "./stores";
</script>

<div>
        <h3>Header</h3>
        <ul>
            {#each navlists as list}
                <li >
                    <a href={list.url}>{list.label}</a>
                </li>
            {/each}
        </ul>
        <p>Counter = {$counter}</p>
</div>

<style>
    div { 
        display: flex;
        justify-content: space-between;
    }

    div ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
    }

    li {
        padding-right: 1rem;
    }
</style>