<script lang="ts">
    export let label: string,
        flavour_text: string | undefined | null = null;
</script>

<label>
    <span>{label}</span>
    {#if flavour_text}
        <small>{flavour_text}</small>
    {/if}
    <slot />
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;

        margin: 1rem 0;

        & span {
            display: block;
            font-variant: small-caps;
            font-weight: 600;
            font-size: .9rem;
        }

        & small {
            margin-bottom: .1rem;
            font-size: .8rem;
        }

        & input {
            background-color: white;
            border: 1px solid var(--colour-grey-300);
            padding: 0.4rem 0.6rem;

            &:focus-visible {
                border: 1px solid var(--colour-primary-500);
                outline: 2px solid var(--colour-primary-300);
            }
        }
    }
</style>
