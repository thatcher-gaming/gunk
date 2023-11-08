<script lang="ts">
    import SectionHeader from "./_SectionHeader.svelte";
    import ThreadPreview from "./_ThreadPreview.svelte";
    
    import ArrowRight from "~icons/ph/ArrowRight";
    import type { PageData } from "./$types";

    export let section: PageData["sections"][0]["section"],
        threads: PageData["sections"][0]["threads"];
    const { id } = section;
</script>

<section>
    <SectionHeader {section} />
    {#each threads as { thread, post }}
        <ThreadPreview {thread} {post} />
    {/each}
    <a href="/section/{id}" class="end"><ArrowRight /></a>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1.25fr 2fr 2fr 2.5rem;
        gap: 1rem;

        height: 12rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a.end {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 150ms var(--ease-out);
        outline: 1px solid transparent;
        grid-column: 4;

        &:hover {
            background-color: var(--colour-grey-50);
            border-radius: 8px;
            outline-color: var(--colour-grey-200);
        }
    }
</style>
