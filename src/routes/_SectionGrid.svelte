<script lang="ts">
    import Button from "$lib/Buttons/Button.svelte";
    import type { PageData } from "./$types";
    import SectionGridItem from "./_SectionGridItem.svelte";

    export let sections: PageData["sections"],
        is_mod: boolean = false;
</script>

<div>
    {#each sections as { section, threads }}
        <SectionGridItem {section} {threads} />
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
