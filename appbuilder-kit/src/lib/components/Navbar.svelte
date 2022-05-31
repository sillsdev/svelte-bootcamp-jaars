<script>
    import Dropdown from "./Dropdown.svelte";
    import SelectGrid from "./SelectGrid.svelte";
    import MuteIcon from "$lib/icons/MuteIcon.svelte";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import DropdownIcon from "$lib/icons/DropdownIcon.svelte";
    import TextAppearanceIcon from "$lib/icons/TextAppearanceIcon.svelte";
    import TabsMenu from "./TabsMenu.svelte";
    export let book = "";
    export let chapter = "";

    let chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
    let verses = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45,46,47,48,49,50,51];
</script>

<div class="dy-navbar bg-primary">
    <div class="dy-navbar-start">
        <slot name="drawer-button"/>
        <Dropdown>
            <svelte:fragment slot="label">
                {book} <DropdownIcon/>
            </svelte:fragment>
        </Dropdown>
        <Dropdown>
            <svelte:fragment slot="label">
                {chapter} <DropdownIcon/>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <TabsMenu options={{
                    "Chapter":{component:SelectGrid,props:{chapters}},
                    "Verse":{component:SelectGrid,props:{verses}}
                }} active="Chapter"/>
            </svelte:fragment>
        </Dropdown>
    </div>
    <div class="dy-navbar-end fill-base-content">
        <button class="dy-btn dy-btn-ghost dy-btn-circle">
            <MuteIcon/>
        </button>
        <button class="dy-btn dy-btn-ghost dy-btn-circle">
            <SearchIcon/>
        </button>
        <Dropdown>
            <svelte:fragment slot="label">
                <TextAppearanceIcon/>
            </svelte:fragment>
        </Dropdown>
    </div>
</div>