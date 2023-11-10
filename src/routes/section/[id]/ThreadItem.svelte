<script lang="ts">
    import type { ThreadData } from "$lib/Data/thread";

    export let thread: ThreadData;

    const { id, section_id, title } = thread;
</script>

<li>
    <a href="/section/{section_id}/thread/{id}">
        {title}
    </a>
</li>

<style>
    a {
        background-color: var(--colour-grey-50);
        border-radius: 8px;
        outline: 1px solid var(--colour-grey-200);

        display: flex;
        align-items: center;
        gap: .5rem;

        padding: 0.5rem 1rem;
        width: 100%;

        color: inherit;
        text-decoration: none;

        &::before {
            counter-increment: thread;
            content: "#" counter(thread);
            color: var(--colour-grey-400);
        }
    }
</style>
