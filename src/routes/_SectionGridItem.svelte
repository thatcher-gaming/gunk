<script lang="ts">
    import type { Section } from "$lib/Data/section";
    import ArrowRight from "~icons/ph/ArrowRightBold";

    export let section: Section;
    const { title, desc, icon, id } = section;
</script>

<section>
    <header>
        <span class="icon" aria-hidden>{icon}</span>
        <h3>{title}</h3>
        <p>{desc}</p>
    </header>
    <article>
        <h4>Thread Title</h4>
        <p>
            Repellat iusto modi quia. Porro eaque velit et omnis
            reprehenderit sunt. Quibusdam nihil enim excepturi sit quia
            nisi. Aut architecto sapiente minima omnis placeat sed.
            Explicabo iure ad quis sint natus. Inventore illum ut
            facilis repellat ea. Nulla voluptatum reiciendis ea dolore
            molestiae qui dignissimos. Aliquam iure ut iste expedita
            delectus ut.
        </p>
    </article>
    <article>
        <h4>Thread Title</h4>
        <p>
            Repellat iusto modi quia. Porro eaque velit et omnis
            reprehenderit sunt.
        </p>
    </article>
    <a href="/section/{id}"><ArrowRight /></a>
</section>

<style>
    section {
        display: grid;
        grid-template-columns: 1.5fr 2fr 2fr 4rem;
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
            margin-bottom: .75rem;
            
            background-color: var(--colour-primary-100);
            border-radius: 100%;
            
            user-select: none;
        }

        & h3 {
            font-size: 1.85rem;
            font-weight: 900;
            margin: 0;
        }

        & p {
            font-size: .95rem;
            margin-top: .4rem;
        }
    }

    article {
        display: flex;
        flex-direction: column;
        max-height: 12rem;

        outline: 1px solid var(--colour-grey-200);
        border-radius: 8px;

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
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
    }
</style>
