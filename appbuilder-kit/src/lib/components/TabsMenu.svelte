<script>
    export let options = {"":{component:"",props:""},};
    export let active = "";
</script>

<div class="tabs bg-primary">
    {#each Object.keys(options) as opt}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a class="dy-tab dy-tab-bordered {active === opt? "dy-tab-active":""}">{opt}</a> 
    {/each}
</div>
<!--<svelte:component this={options[active].component} {...options[active].props}/>-->