<script lang="ts">
    import { catalog } from '$lib/data/constants'; 
    import Dropdown from "./Dropdown.svelte";
    import SelectGrid from "./SelectGrid.svelte";
    import TabsMenu from "./TabsMenu.svelte";
    import LayoutOptions from "./LayoutOptions.svelte";
    //Icons
    import MuteIcon from "$lib/icons/MuteIcon.svelte";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import DropdownIcon from "$lib/icons/DropdownIcon.svelte";
    import TextAppearanceIcon from "$lib/icons/TextAppearanceIcon.svelte";
    import SinglePaneIcon from "$lib/icons/SinglePaneIcon.svelte";
    import SideBySideIcon from "$lib/icons/SideBySideIcon.svelte";
    import VerseByVerseIcon from "$lib/icons/VerseByVerseIcon.svelte";
    
    /*
        let books = [
            "Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua",
            "Judges","Ruth","1 Samuel","2 Samuel","1 Kings","2 Kings",
            "1 Chronicles","2 Chronicles","Ezra","Nehemiah","Esther","Job",
            "Psalm","Proverbs","Ecclesiastes","Song of Songs","Isaiah","Jeremiah",
            "Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos",
            "Obadiah","Jonah","Micah","Nahum","Habakkuk","Zephaniah",
            "Haggai","Zechariah","Malachi","Matthew","Mark","Luke",
            "John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians",
            "Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy",
            "2 Timothy","Titus","Philemon","Hebrews","James","1 Peter",
            "2 Peter","1 John","2 John","3 John","Jude","Revelation",
        ];
        let chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
        let verses = [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
            21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,
            41,42,43,44,45,46,47,48,49,50,51];
    */

    const docSets = catalog.map(ds => ds.id)
    let ds = docSets[0]
    $: books = catalog.find(d => d.id === ds).documents
    $: b = books[0].bookCode
    $: chapters = books.find(d => d.bookCode === b).versesByChapters
    $: c = Object.keys(chapters)[0]
    let v = ""
</script>

<div class="dy-navbar bg-primary h-full">
    <div class="dy-navbar-start">
        <slot name="drawer-button"/>
        <!-- Translation/View Selector -->
        <Dropdown>
            <svelte:fragment slot="label">{ds} <DropdownIcon/></svelte:fragment>
            <svelte:fragment slot="content">
                <TabsMenu options={{
                    "Single Pane":{tab:{component:SinglePaneIcon},
                        component:LayoutOptions,props:{layoutOption:"Single Pane"}},
                    "Side By Side":{tab:{component:SideBySideIcon},
                        component:LayoutOptions,props:{layoutOption:"Side By Side"}},
                    "Verse By Verse":{tab:{component:VerseByVerseIcon},
                        component:LayoutOptions,props:{layoutOption:"Verse By Verse"}}
                }} active="Single Pane"/>
            </svelte:fragment>
        </Dropdown>
        <!-- Book Selector -->
        <Dropdown>
            <svelte:fragment slot="label">
                {b} <DropdownIcon/>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <TabsMenu options={{
                    "Book":{component:SelectGrid,props:{
                        options:books.map(d => d.bookCode)},
                        handler: (e) => b = e.detail.text},
                    "Chapter":{component:SelectGrid,props:{
                        options:Object.keys(chapters)},
                        handler: (e) => c = e.detail.text},
                    "Verse":{component:SelectGrid,props:{
                        options:Object.keys(chapters[c])},
                        handler: (e) => v = e.detail.text}
                }} active="Book"/>
            </svelte:fragment>
        </Dropdown>
        <!-- Chapter Selector -->
        <Dropdown>
            <svelte:fragment slot="label">
                {c} <DropdownIcon/>
            </svelte:fragment>
            <svelte:fragment slot="content">
                <TabsMenu options={{
                    "Chapter":{component:SelectGrid,props:{
                        options:Object.keys(chapters)},
                        handler: (e) => c = e.detail.text},
                    "Verse":{component:SelectGrid,props:{
                        options:Object.keys(chapters[c])},
                        handler: (e) => v = e.detail.text}
                }} active="Chapter"/>
            </svelte:fragment>
        </Dropdown>
    </div>
    <div class="dy-navbar-end fill-base-content">
        <button class="dy-btn dy-btn-ghost dy-btn-circle">
            <MuteIcon/>
        </button>
        <a href="/search" class="dy-btn dy-btn-ghost dy-btn-circle">
            <SearchIcon/>
        </a>
        <Dropdown>
            <svelte:fragment slot="label"> <TextAppearanceIcon/> </svelte:fragment>
        </Dropdown>
    </div>
</div>
