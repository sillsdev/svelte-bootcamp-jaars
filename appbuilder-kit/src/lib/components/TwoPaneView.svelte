<script lang="ts">
    import HorizontalPanes from "./HorizontalPanes.svelte";
    import VerticalPanes from "./VerticalPanes.svelte";

</script>

<div class="h-full hidden sm:block">
    <HorizontalPanes />
</div>
<div class="h-full sm:hidden">
    <VerticalPanes />
</div>
