<script lang="ts">
    export let kind: "a" | "button" = "button";
</script>

{#if kind == "button"}
    <button {...$$restProps} on:click><slot /></button>
{/if}

{#if kind == "a"}
    <!-- svelte-ignore a11y-missing-attribute -->
    <a {...$$restProps}><slot /></a>
{/if}

<style>
    button, a {
        all: unset;

        display: flex;
        align-items: center;
        gap: .25rem;

        height: max-content;
        width: max-content;
        padding: 0.6rem 0.85rem;

        background-color: var(--colour-primary-200);
        border-radius: 4px;

        line-height: 1;
        font-size: 0.9rem;
        font-weight: 500;

        cursor: pointer;
        user-select: none;

        &:hover {
            background-color: var(--colour-primary-300);
            outline: 1px solid var(--colour-primary-400);
        }
    }
</style>
