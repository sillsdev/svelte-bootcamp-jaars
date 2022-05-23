<script lang="ts">
	export let views = 1;
    import { count } from './stores.js';
    const pageNames = ['View One', 'View Two', 'View Three'];
    function switchPage(pageName) {
        for (let i = 0; i < pageNames.length; i++) {
            if (pageName === pageNames[i]) {
                views = i + 1;
            }
        } 
    }
</script>

<main>
    <div style="display:inline" >
		<div style="float: left; width: 25%">
				Header
		</div>
        <ul>
            {#each pageNames as p}
                <div style="float: left; width: 16%">
                    <li><button on:click={() => switchPage(p)}>{p}</button></li>
                </div>
            {/each}
        </ul>

        <div style="float: left; width: 25%">
            Counter = {$count}
        </div>
	</div>
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
        ul {
        display: inline;
        list-style-type: none;
        margin: auto;
        }
    </style>