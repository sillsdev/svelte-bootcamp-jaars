<script>
    import Dropdown from "./Dropdown.svelte";
    import SelectGrid from "./SelectGrid.svelte";
    import HamburgerIcon from "$lib/icons/HamburgerIcon.svelte";
    import MuteIcon from "$lib/icons/MuteIcon.svelte";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import DropdownIcon from "$lib/icons/DropdownIcon.svelte";
    export let book = "";
    export let chapter = "";
    let chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
</script>

<div class="navbar bg-base-100">
    <div class="navbar-start">
        <div class="btn btn-ghost p-1">
            <HamburgerIcon/>
        </div>
        <Dropdown>
            <svelte:fragment slot="label">
                {book} <DropdownIcon/>
            </svelte:fragment>
        </Dropdown>
        <Dropdown>
            <svelte:fragment slot="label">
                {chapter} <DropdownIcon/>
            </svelte:fragment>
            <SelectGrid slot="content" options={chapters}/>
        </Dropdown>
    </div>
    <div class="navbar-end fill-base-content">
        <button class="btn btn-ghost btn-circle">
            <MuteIcon/>
        </button>
        <button class="btn btn-ghost btn-circle">
            <SearchIcon/>
        </button>
        <Dropdown>
            <svelte:fragment slot="label">
                <img class="w-5 h-5" src="icons/ic_action_font_bigger_black.png" alt="hamburger menu"/>
            </svelte:fragment>
        </Dropdown>
    </div>
</div>