<script lang="ts">
    import HorizontalPanes from "./HorizontalPanes.svelte";
    import VerticalPanes from "./VerticalPanes.svelte";

</script>

<div class="h-full hidden sm:block">
    <HorizontalPanes numPanes={4}/>
</div>
<div class="h-full sm:hidden">
    <VerticalPanes />
</div>
