<script>
    import { clickOutside } from '$lib/scripts/click_outside.js';
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let actions = [""];
    let showMenu = false;

    function handleAction(action) {
        dispatch('menuaction', {
            text: action
        });
    }
</script>

<div use:clickOutside on:outclick={() => showMenu = false} class="annotation-item-menu annotation-float-right">
    <span on:click={() => showMenu = !showMenu} class="dropbtn">
        <img class="dropbtn-image" src="ic_dots_vertical_24_black.png" alt="vertical dots">
    </span>
    <div class="dropdown-content {showMenu? "show":"hidden"}">
        {#each actions as a}
        <!-- svelte-ignore a11y-missing-attribute-->
            <a on:click={() => handleAction(a)}>{a}</a>
        {/each}
        <!--Orignal menu. Handle actual actions later-->
        <!--<a href="I-0">View</a>
        <a href="E-0">Edit</a>
        <a href="S-0">Share</a>
        <a href="D-0">Delete</a>-->
    </div>
</div>