<script lang="ts">
    import Button from "$lib/Buttons/Button.svelte";
    import type { Section } from "$lib/Data/section";
    import SectionGridItem from "./_SectionGridItem.svelte";

    export let sections: Section[], is_mod: boolean;
</script>

<div>
    {#each sections as section}
        <SectionGridItem {section} />
    {/each}
</div>

{#if is_mod}
    <Button
        kind="a"
        href="/admin/section/create/"
        style="margin-left: auto;"
    >
        new thing here please
    </Button>
{/if}

<style>
    div {
        margin: 4rem 0;
        display: grid;
        gap: 3.5rem;
    }
</style>
