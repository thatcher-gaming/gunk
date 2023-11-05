<script lang="ts">
    import Button from "$lib/Buttons/Button.svelte";
    import type { Section } from "$lib/Data/section";

    export let sections: Section[], is_mod: boolean;
</script>

<section>
    {#each sections as { title, desc, icon, id }}
        <article>
            <a href="/section/{id}">
                <div>
                    <h3 class="title">{title}</h3>
                    <p>{desc}</p>
                </div>
                <span aria-hidden class="icon">{icon}</span>
            </a>
            <div class="latest">
                <span class="name">thread name</span>
                <span class="text"
                    >Libero consequatur est eaque rerum. Fuga odio
                    quisquam ea maxime pariatur ad eius tempore. Facilis
                    placeat laboriosam dolores.</span
                >
            </div>
        </article>
    {/each}
</section>
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
    section {
        margin: 1.5rem 0;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.05rem 1rem;
    }

    article {
        display: grid;
        grid-template-rows: 3.5rem 3.5rem;
    }

    a {
        display: grid;
        grid-template-columns: 1fr auto;
        place-items: center left;
        gap: 0.75rem;

        text-decoration: none;
        color: black;
        font-weight: 400;

        background-color: var(--colour-primary-200);
        border-radius: 8px 8px 0 0;

        overflow: hidden;

        & div {
            padding: 0 0.75rem;
        }

        &:hover {
            background-color: var(--colour-primary-300);
        }
    }

    .title {
        font-size: 0.9rem;
        font-weight: 700;
        color: inherit;
        line-height: 1;
        margin: 0;
        margin-bottom: 0.35rem;

        & + p {
            line-height: 1;
            margin-top: 0;
            font-size: 0.85rem;
        }
    }

    .icon {
        display: grid;
        place-content: center;

        font-weight: 700;
        font-size: 1rem;
    
        width: 2.25rem;
        aspect-ratio: 1 / 1;
        margin-right: .75rem;

        background-color: white;
        border-radius: 100%;
    }

    .latest {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--colour-primary-100);
        border-radius: 0 0 8px 8px;
        padding: 0 0.75rem;
        line-height: 1.4;

        overflow: hidden;

        color: black;

        & .name {
            font-size: 0.8rem;
            font-weight: 600;
        }

        & .text {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
</style>
