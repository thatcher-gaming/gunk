<script lang="ts">
    import type { Section } from "$lib/Data/section";
    import ArrowRight from "~icons/ph/ArrowRightBold";

    export let section: Section;
    const { title, desc, icon, id } = section;
</script>

<section>
    <header>
        <span class="icon" aria-hidden>{icon}</span>
        <a href="/section/{id}">
            <h3>{title}</h3>
            <p>{desc}</p>
        </a>
    </header>
    <article>
        <h4>Thread Title</h4>
        <p>
            Repellat iusto modi quia. Porro eaque velit et omnis reprehenderit
            sunt. Quibusdam nihil enim excepturi sit quia nisi. Aut architecto
            sapiente minima omnis placeat sed. Explicabo iure ad quis sint
            natus. Inventore illum ut facilis repellat ea. Nulla voluptatum
            reiciendis ea dolore molestiae qui dignissimos. Aliquam iure ut iste
            expedita delectus ut.
        </p>
        <div class="fade" />
    </article>
    <article>
        <h4>Thread Title</h4>
        <p>
            Repellat iusto modi quia. Porro eaque velit et omnis reprehenderit
            sunt.
        </p>
        <div class="fade" />
    </article>
    <a href="/section/{id}" class="end"><ArrowRight /></a>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1.25fr 2fr 2fr 2.5rem;
        gap: 1rem;

        height: 12rem;
    }

    header {
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;

        margin-right: 1rem;

        text-align: right;

        & .icon {
            display: grid;
            place-items: center;

            width: 2.5rem;
            aspect-ratio: 1 / 1;
            margin-bottom: 0.75rem;

            line-height: 1;
            font-size: 1.25rem;

            background-color: var(--colour-primary-100);
            border-radius: 12px;

            user-select: none;
        }

        & h3 {
            font-size: 1.75rem;
            font-weight: 900;
            margin: 0;
        }

        & p {
            font-size: 0.95rem;
            margin-top: 0.4rem;
            line-height: 1.25;
        }
    }

    article {
        position: relative;
        display: flex;
        flex-direction: column;
        max-height: 12rem;

        outline: 1px solid var(--colour-grey-200);
        border-radius: 8px;
        overflow: hidden;

        & h4 {
            margin: 0;
            padding: 0.75rem 0.75rem;

            background-color: var(--colour-grey-100);

            color: var(--colour-grey-700);
            font-size: 0.9rem;
        }

        & p {
            max-height: 100%;
            margin: 0;
            padding: 0.5rem 0.75rem;
            overflow: hidden;

            text-overflow: ellipsis;
            font-size: 0.85rem;
        }

        & .fade {
            position: absolute;
            bottom: 0;
            height: 4rem;
            width: 100%;
            background: linear-gradient(to bottom, transparent, white 75%);
        }
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

        &:hover {
            background-color: var(--colour-grey-50);
            border-radius: 8px;
            outline-color: var(--colour-grey-200);
        }
    }
</style>
