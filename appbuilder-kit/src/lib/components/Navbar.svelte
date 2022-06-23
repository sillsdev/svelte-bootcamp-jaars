<script lang="ts">
    import { queryPk } from '../scripts/queryPk';
    import { nextBook, nextDocSet, nextChapter, nextNumVerses } from '$lib/data/stores';
    import Dropdown from "./Dropdown.svelte";
    import SelectGrid from "./SelectGrid.svelte";
    import MuteIcon from "$lib/icons/MuteIcon.svelte";
    import SearchIcon from "$lib/icons/SearchIcon.svelte";
    import DropdownIcon from "$lib/icons/DropdownIcon.svelte";
    import TextAppearanceIcon from "$lib/icons/TextAppearanceIcon.svelte";
    import TabsMenu from "./TabsMenu.svelte";
    export let book = "";
    export let chapter = "";
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
    
    $: promise = queryPk(`{
        docSet(id: "`+$nextDocSet+`") {
            documents {
                bookCode:header(id: "bookCode")
            }
            document(bookCode:"`+$nextBook+`"){
                cIndexes {
                    chapter
                }
            }
        }
    }`);
</script>

<div class="dy-navbar bg-primary">
    <div class="dy-navbar-start">
        <slot name="drawer-button"/>
        <Dropdown>
            <svelte:fragment slot="label">
                {book} <DropdownIcon/>
            </svelte:fragment>
            <svelte:fragment slot="content">
                {#await promise then res}
                <TabsMenu options={{
                    "Book":{component:SelectGrid,props:{
                        options:JSON.parse(res).data.docSet.documents.map(d => d.bookCode)}},
                    "Chapter":{component:SelectGrid,props:{
                        options:JSON.parse(res).data.docSet.document.cIndexes.map(c => c.chapter)}},
                    "Verse":{component:SelectGrid,props:{
                        options:Array.from(Array($nextNumVerses), (_, index) => index + 1)}}
                }} active="Book"/>
                {/await}
            </svelte:fragment>
        </Dropdown>
        <Dropdown>
            <svelte:fragment slot="label">
                {chapter} <DropdownIcon/>
            </svelte:fragment>
            <svelte:fragment slot="content">
                {#await promise then res}
                <TabsMenu options={{
                    "Chapter":{component:SelectGrid,props:{
                        options:JSON.parse(res).data.docSet.document.cIndexes.map(c => c.chapter)}},
                    "Verse":{component:SelectGrid,props:{
                        options:Array.from(Array($nextNumVerses), (_, index) => index + 1)}}
                }} active="Chapter"/>
                {/await}
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
            <svelte:fragment slot="label">
                <TextAppearanceIcon/>
            </svelte:fragment>
        </Dropdown>
    </div>
</div>
