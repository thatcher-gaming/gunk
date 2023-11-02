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

        padding: 0.5rem 0.75rem;

        background-color: var(--colour-primary-200);
        outline: 1px solid var(--colour-primary-300);

        line-height: 1;
        font-size: 0.9rem;
        font-weight: 600;

        cursor: pointer;
        user-select: none;

        &:hover {
            background-color: var(--colour-primary-300);
            outline: 1px solid var(--colour-primary-400);
        }
    }
</style>
