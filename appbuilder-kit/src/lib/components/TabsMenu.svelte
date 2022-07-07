<script lang="ts">
    export let options: App.TabMenuOptions;
    export let active = "";
    export let colorClass = "bg-primary";

    function handleMenuaction(e: CustomEvent) {
        console.log(e.detail.text);
        if(options[active].handler !== undefined) {
            options[active].handler(e);
        }
    }
</script>

<div class="tabs {colorClass}">
    {#each Object.keys(options) as opt}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => active = opt}
        class="dy-tab dy-tab-bordered {active === opt? "dy-tab-active":""}">
            {#if options[opt].tab !== undefined}
                <svelte:component this={options[opt].tab?.component} {...options[opt].tab?.props}/>
            {:else}
                {opt}
            {/if}
        </a> 
    {/each}
</div>

<svelte:component on:menuaction={handleMenuaction} this={options[active].component} {...options[active].props}/>