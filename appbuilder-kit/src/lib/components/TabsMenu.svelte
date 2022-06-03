<script>
    /** @type App.TabMenuOptions */
    export let options = {"":{component:"",props:{}},};
    export let active = "";

    /**
    * @param {CustomEvent<any>} e
    */
    function handleMenuaction(e) {
        console.log(e.detail.text)
    }
</script>

<div class="tabs bg-primary">
    {#each Object.keys(options) as opt}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => active = opt}
        class="dy-tab dy-tab-bordered {active === opt? "dy-tab-active":""}">{opt}</a> 
    {/each}
</div>

<svelte:component on:menuaction={handleMenuaction} this={options[active].component} {...options[active].props}/>