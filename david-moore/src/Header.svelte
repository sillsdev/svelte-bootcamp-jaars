<script lang="ts">
	export let views = 1;
    export let count = 0;
</script>

<main>
    <div style="display:inline" >
		<div style="float: left; width: 25%">
				Header
		</div>
		<div style="float: left; width: 16%">
            <label>
                <input type=radio bind:group={views} name="views" value={1}>
                View 1

            </label>
	    </div>
        <div style="float: left; width: 16%">

            <label>
                <input type=radio bind:group={views} name="views" value={2}>
                View 2

            </label>
        </div>
        <div style="float: left; width: 18%">

            <label>
                <input type=radio bind:group={views} name="views" value={3}>
                View 3

            </label>
        </div>
        <div style="float: left; width: 25%">
            Counter = {count}
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
    
    </style>