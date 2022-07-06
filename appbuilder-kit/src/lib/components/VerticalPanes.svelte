<!--
@component
based on `VSplitPane` from [svelte-split-pane](https://github.com/Readiz/svelte-split-pane).  
lightly modified because touch was not working.
-->
<script>
    import { onMount, onDestroy } from 'svelte';
    /**
    * @type {HTMLDivElement}
    */
    let separator;
    export let updateCallback = () => {
        // do nothing
        return;
    }

    /**
    * @type {{ e: any; firstHeight: any; secondHeight: any; offsetTop: any; offsetLeft?: number; }}
    */
    let md;
    const onPointerdown = (/** @type {PointerEvent} */e) => {
        if (e.cancelable) e.preventDefault();
        //if (e.button !== 0) return;
        md = {e,
            offsetLeft:  separator.offsetLeft,
            offsetTop:   separator.offsetTop,
            firstHeight:  top.offsetHeight,
            secondHeight: down.offsetHeight
        };
        window.addEventListener('pointermove', onPointermove);
        window.addEventListener('pointerup', onPointerup);
    };
    const onPointermove = (/** @type {PointerEvent} */e) => {
        if (e.cancelable) e.preventDefault();
        //if (e.button !== 0) return;
        var delta = {x: e.clientX - md.e.clientX,
                y: e.clientY - md.e.clientY};
        // Prevent negative-sized elements
        delta.y = Math.min(Math.max(delta.y, -md.firstHeight),
                    md.secondHeight);

        separator.style.top = md.offsetTop + delta.y + "px";
        top.style.height = (md.firstHeight + delta.y) + "px";
        down.style.height = (md.secondHeight - delta.y) + "px";
        updateCallback();
    }
    const onPointerup = (/** @type {PointerEvent} */ e) => {
        if (e && e.cancelable) e.preventDefault()
        updateCallback();
        window.removeEventListener('pointermove', onPointermove);
        window.removeEventListener('pointerup', onPointerup);
    }
    function resetSize() {
        if (top) top.removeAttribute('style');
        if (down) down.removeAttribute('style');
        if (separator) separator.removeAttribute('style');
    }
    function onResize() {
        onPointerup();
        resetSize();
    }
    onMount(() => {
        window.addEventListener('resize', onResize);
    });
    onDestroy(() => {
        window.removeEventListener('resize', onResize);
    });
    /** @type {HTMLDivElement}*/let top;
    /** @type {HTMLDivElement}*/let down;
    export let topPanelSize = '50%';
    export let downPanelSize = '50%';
    export let minTopPaneSize = '0';
    export let minDownPaneSize = '0';
    $: topPanelSize && resetSize();
    $: downPanelSize && resetSize();
</script>

<div class="wrapper" style="--top-panel-size: {topPanelSize}; --down-panel-size: {downPanelSize}; --min-top-panel-size:{minTopPaneSize}; --min-down-panel-size: {minDownPaneSize};">
    <div bind:this={top} class="top">
        <slot name="top">
            <div style="background-color: red;">
                Top Contents goes here...
            </div>
        </slot>
    </div>
    <div bind:this={separator} class="separator" on:pointerdown={onPointerdown}>
    </div>
    <div bind:this={down} class="down">
        <slot name="down">
            <div style="background-color: yellow;">
                Down Contents goes here...
            </div>
        </slot>
    </div>
</div>

<style>
    div.wrapper {
        width: 100%;
        height: 100%;
        /* background-color: yellow; */
        display: flex;
        overflow: auto;
        flex-direction: column;
    }
    div.separator {
        cursor: row-resize;
        width: 100%;
        height: 8px;
        margin-top: -2px;
        z-index: 1;
        background-color: #aaa;
        touch-action: none;
    }
    div.top {
        height: var(--top-panel-size);
        min-height: var(--min-top-panel-size);
        width: 100%;
        overflow: auto;
    }
    div.down {
        height: var(--down-panel-size);
        min-height: var(--min-down-panel-size);
        width: 100%;
        overflow: auto;
    }
</style>