<script lang="ts">
    export let options: App.TabMenuOptions = {"":{component:"",props:{}},};
    export let active = "";
    export let colorClass = "bg-primary";

    function handleMenuaction(e: CustomEvent) {
        console.log(e.detail.text);
    }
</script>

<div class="tabs {colorClass}">
    {#each Object.keys(options) as opt}
        <!-- svelte-ignore a11y-missing-attribute -->
        <a on:click={() => active = opt}
        class="dy-tab dy-tab-bordered {active === opt? "dy-tab-active":""}">{opt}</a> 
    {/each}
</div>

<svelte:component on:menuaction={handleMenuaction} this={options[active].component} {...options[active].props}/>